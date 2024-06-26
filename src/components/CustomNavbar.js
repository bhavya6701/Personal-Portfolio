"use client";

import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";

import { Pompiere } from "next/font/google";
const font_pompiere = Pompiere({ weight: "400", subsets: ["latin"] });

export default function CustomNavbar() {
  // Menu items for the navbar
  const menuItems = ["ABOUT", "TIMELINE", "PROJECTS", "CONTACT"];

  // States for menu, music, and active component
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [navCompActive, setNavCompActive] = useState(0);

  // Audio reference for music
  const audioRef = useRef();

  // Update menu open state
  const updateMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Update active component
  const updateNavCompActive = (index) => {
    setNavCompActive(index);
  };

  // Update audio play/pause
  const updateAudioCommand = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <Navbar
      isBordered
      maxWidth={"full"}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className={`text-3xl ${font_pompiere.className} icon name cursor-default`}>BR</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-10 lg:gap-20"
        justify="center"
      >
        <NavbarItem>
          <Link
            href="/#about"
            className={`text-md lg:text-xl xl:lg:text-2xl icon ${
              navCompActive == 0 ? "nav-active" : ""
            }`}
            onClick={() => updateNavCompActive(0)}
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/#timeline"
            className={`text-md lg:text-xl xl:lg:text-2xl icon ${
              navCompActive == 1 ? "nav-active" : ""
            }`}
            onClick={() => updateNavCompActive(1)}
          >
            TIMELINE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/#projects"
            className={`text-md lg:text-xl xl:lg:text-2xl icon ${
              navCompActive == 2 ? "nav-active" : ""
            }`}
            onClick={() => updateNavCompActive(2)}
          >
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/#contact"
            className={`text-md lg:text-xl xl:lg:text-2xl icon ${
              navCompActive == 3 ? "nav-active" : ""
            }`}
            onClick={() => updateNavCompActive(3)}
          >
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4 md:gap-8">
        <NavbarItem className="flex">
          <Link
            href="https://www.linkedin.com/in/bhavya-ruparelia/"
            className="text-2xl"
          >
            <Icon icon="f7:logo-linkedin" className="icon" />
          </Link>
        </NavbarItem>

        <NavbarItem className="flex">
          <Link href="https://github.com/bhavya6701" className="text-2xl">
            <Icon icon="f7:logo-github" className="icon" />
          </Link>
        </NavbarItem>

        <NavbarItem className="flex">
          <div className="text-2xl cursor-pointer" onClick={updateAudioCommand}>
            <Icon
              icon="tabler:brand-netease-music"
              className={`icon ${
                isMusicPlaying ? "music-play" : "music-pause"
              }`}
            />
            <audio
              ref={audioRef}
              src="/assets/audio/Siddhi_Beyond_Paradise.mp3"
              loop={true}
            />
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full icon" href={`/#${item.toLowerCase()}`} size="lg" onClick={() => updateMenuOpen()}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
