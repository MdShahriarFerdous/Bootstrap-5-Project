const currentTheme = localStorage.getItem("theme");

document.documentElement.setAttribute("data-bs-theme", currentTheme || "light");

const themeSwitchButton = document.getElementById("darkSwitch");
themeSwitchButton.addEventListener("click", toggleTheme);

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-bs-theme");

	const newTheme = currentTheme === "light" ? "dark" : "light";
	document.documentElement.setAttribute("data-bs-theme", newTheme);

	localStorage.setItem("theme", newTheme);
}

// const htmlTag = document.documentElement;
// const bodyTag = document.body;
// const hasClass = htmlTag.classList.contains("dark");

// const courseSection = document.querySelector("#course-section");
// const heading = courseSection.querySelector("h3");
// const paragraph = courseSection.querySelector("p");

// if (hasClass) {
// 	const courseSection = document.querySelector("#course-section .contact_head h3");
// 	courseSection.style.color = white;
// }
