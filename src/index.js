import "./style.css";


const html = {
    dropdownButton: document.getElementById("dropdown-button"),
    dropdownMenu: document.getElementById("dropdown-div"),
}
html.dropdownMenu.classList.toggle("not-visible");

html.dropdownButton.addEventListener("click", () => {
    html.dropdownMenu.classList.toggle("not-visible");
});

