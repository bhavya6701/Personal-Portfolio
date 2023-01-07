var arr = [];
for (let i = 1; i <= 8; i++) arr[i - 1] = document.getElementById("loading" + i);

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
	for (let i = 0; i < 8; i++) if (isInViewPort(arr[i])) arr[i].classList.add("loading" + (i + 1));

	if (window.scrollY <= 50) document.getElementById("sidebar").style.visibility = "hidden";
	else {
		document.getElementById("sidebar").style.visibility = "visible";
		if (window.scrollY > 50 && window.scrollY <= 80)
			document.getElementById("sidebar").style.opacity = "0.1";
		if (window.scrollY > 80 && window.scrollY <= 110)
			document.getElementById("sidebar").style.opacity = "0.2";
		if (window.scrollY > 110 && window.scrollY <= 140)
			document.getElementById("sidebar").style.opacity = "0.3";
		if (window.scrollY > 140 && window.scrollY <= 170)
			document.getElementById("sidebar").style.opacity = "0.4";
		if (window.scrollY > 170 && window.scrollY <= 200)
			document.getElementById("sidebar").style.opacity = "0.5";
		if (window.scrollY > 200 && window.scrollY <= 230)
			document.getElementById("sidebar").style.opacity = "0.6";
		if (window.scrollY > 230 && window.scrollY <= 260)
			document.getElementById("sidebar").style.opacity = "0.7";
		if (window.scrollY > 260 && window.scrollY <= 290)
			document.getElementById("sidebar").style.opacity = "0.8";
		if (window.scrollY > 290 && window.scrollY <= 320)
			document.getElementById("sidebar").style.opacity = "0.9";
		if (window.scrollY > 320) document.getElementById("sidebar").style.opacity = "1";
	}
}

function isInViewPort(item) {
	var bounding = item.getBoundingClientRect();
	var myElementHeight = item.offsetHeight;
	var myElementWidth = item.offsetWidth;

	if (
		bounding.top >= -myElementHeight &&
		bounding.left >= -myElementWidth &&
		bounding.right <=
			(window.innerWidth || document.documentElement.clientWidth) + myElementWidth &&
		bounding.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) + myElementHeight
	) {
		return true;
	} else {
		return false;
	}
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", SendMail);

function SendMail(e) {
	e.preventDefault();
	var params = {
		from_name: document.getElementById("name").value,
		email_id: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};
	emailjs.send("service_okmirvb", "template_cf231ki", params).then(() => {
		alert("Message sent!");
	});
	form.reset();
}
