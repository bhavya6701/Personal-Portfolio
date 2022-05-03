window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
    if(window.scrollY <= 50)
        document.getElementById("sidebar").style.visibility = "hidden";
    else {
        document.getElementById("sidebar").style.visibility = "visible";
        if(window.scrollY > 50 && window.scrollY <= 80)
            document.getElementById("sidebar").style.opacity = "0.1";
        if(window.scrollY > 80 && window.scrollY <= 110)
            document.getElementById("sidebar").style.opacity = "0.2";
        if(window.scrollY > 110 && window.scrollY <= 140)
            document.getElementById("sidebar").style.opacity = "0.3";
        if(window.scrollY > 140 && window.scrollY <= 170)
            document.getElementById("sidebar").style.opacity = "0.4";
        if(window.scrollY > 170 && window.scrollY <= 200)
            document.getElementById("sidebar").style.opacity = "0.5";
        if(window.scrollY > 200 && window.scrollY <= 230)
            document.getElementById("sidebar").style.opacity = "0.6";
        if(window.scrollY > 230 && window.scrollY <= 260)
            document.getElementById("sidebar").style.opacity = "0.7";
        if(window.scrollY > 260 && window.scrollY <= 290)
            document.getElementById("sidebar").style.opacity = "0.8";
        if(window.scrollY > 290 && window.scrollY <= 320)
            document.getElementById("sidebar").style.opacity = "0.9";
        if(window.scrollY > 320)
            document.getElementById("sidebar").style.opacity = "1";
    }        
}