window.onload = function() {
  displayMode();
}

const updateMode = function () {
	if (localStorage.getItem("theme") === "dark")
		localStorage.setItem("theme", "light");
	else
		localStorage.setItem("theme", "dark");

	displayMode();
}

const displayMode = function() {

	if (localStorage.getItem("theme") === "dark") {
		document.getElementsByTagName("h1")[0].classList.add("header-dark");
		document.getElementsByTagName("body")[0].classList.add("body-dark");
		document.getElementsByTagName("main")[0].classList.add("main-dark");

		document.getElementById("sunmoon").src = "images/sun.png";
		document.getElementById("githubpic").src = "images/github_dark.png";
		document.getElementById("linkedinpic").src = "images/linkedin_dark.png";
		document.getElementById("hspic").src = "images/handshake_dark.png";
	}
	
	else {
		document.getElementsByTagName("h1")[0].classList.remove("header-dark");
		document.getElementsByTagName("body")[0].classList.remove("body-dark");
		document.getElementsByTagName("main")[0].classList.remove("main-dark");

		document.getElementById("sunmoon").src = "images/moon.png";
		document.getElementById("githubpic").src = "images/github.png";
		document.getElementById("linkedinpic").src = "images/linkedin.png";
		document.getElementById("hspic").src = "images/handshake.png";
	}
}

