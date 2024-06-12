"use client";
import React, { act } from "react";
import { Arima } from "next/font/google";
import { FormLabel } from "./aceternity_ui/FormLabel";
import { FormInput } from "./aceternity_ui/FormInput";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";

const font_arima = Arima({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  emailjs.init("41DGlc-qRC3UkjabZ");
  
  function sendMail(e) {
    e.preventDefault();
    firstname = e.target.elements.firstname.value;
    lastname = e.target.elements.lastname.value;
    email = e.target.elements.email.value;
    message = e.target.elements.message.value;
    console.log(firstname, lastname, email, message);

    var params = {
      from_name: firstname + " " + lastname,
      email_id: email,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_okmirvb", "template_cf231ki", params).then(() => {
      alert("Message sent!");
    });

    // Reset form
    e.target.reset();
  }

  return (
    <div>
      <h1
        className={`text-center text-2xl lg:text-5xl pt-28 mb-8 background-shadow tracking-[0.4em] ${font_arima.className}`}
        id="contact"
      >
        GET IN TOUCH
      </h1>
      <div className="max-w-[1400px] w-full mx-auto rounded-none md:rounded-2xl p-4 shadow-input dark:bg-default-100/50 backdrop-blur-sm">
        <form onSubmit={sendMail}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-6">
            <LabelInputContainer>
              <FormLabel htmlFor="firstname">First name</FormLabel>
              <FormInput
                id="firstname"
                placeholder="Captain"
                type="text"
                name="firstname"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <FormLabel htmlFor="lastname">Last name</FormLabel>
              <FormInput
                id="lastname"
                placeholder="Awesome"
                type="text"
                name="lastname"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-6">
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              id="email"
              placeholder="youremail@notspam.com"
              type="email"
              name="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-6">
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormInput
              id="message"
              placeholder="Let's collaborate! Tell me more."
              type="text"
              className="h-32"
              name="message"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            name="submitbtn"
          >
            Send!
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-r from-transparent dark:via-neutral-700 to-transparent my-8 h-[2px] w-full" />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
