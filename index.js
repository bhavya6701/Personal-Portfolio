var arr = [];
for(let i=0;i<=8;i++)
    arr[i-1] = document.getElementById("loading" + i);

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
    for(let i=0;i<8;i++)
        if(isInViewPort(arr[i]))
            arr[i].classList.add("loading" + (i+1));

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

function isInViewPort(item) {
    var bounding = item.getBoundingClientRect();
    var myElementHeight = item.offsetHeight;
    var myElementWidth = item.offsetWidth;

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", validate);

function validate(e) {
    e.preventDefault();

    var name = form["name"].value.trim();
    var email = form["email"].value.trim();
    var subject = form["subject"].value.trim();
    var message = form["message"].value.trim();
    var Eselect = document.getElementById("email-select");
    var select = Eselect.options[Eselect.selectedIndex].text;

    var email_Id = email;
    if(select != "Other (specify)")
        email_Id += select;

    let validName = validateName(name);
    let validEmail = validateEmail(email, email_Id);

    if(!validName)
        alert("Invalid Name, submit the form with correct credentials!");
    if(!validEmail)
        alert("Invalid Email, submit the form with correct credentials!");
    
    if(validEmail && validName) {
        window.location.href = "mailto:bhavyaruparelia@gmail.com?subject=" + subject + "&body=" + message;
        form.reset();
    }
}

function validateName(name) {
	if (name === "")
		return false;

	const nameRegex = /^[a-zA-Z ]+$/;
	if (!nameRegex.test(name))
		return false;

	return true;
}

function validateEmail(email, email_Id) {
	if (email === "")
		return false;
    console.log(email_Id);

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!emailRegex.test(email_Id))
		return false;

	return true;
}
