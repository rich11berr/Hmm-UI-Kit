const inputSec = document.getElementById("input-section");
const buttonSec = document.getElementById("button-section");
const dropdownSec = document.getElementById("dropdown_section");

const descr = document.querySelector(".description");

const btns = document.querySelectorAll(".nav__btn");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        descr.style.display = "none";
        if (inputSec.id === e.dataset.section) {
            inputSec.style.display = "block";
            buttonSec.style.display = "none";
            dropdownSec.style.display = "none";
        }
        if (buttonSec.id === e.dataset.section) {
            buttonSec.style.display = "block";
            inputSec.style.display = "none";
            dropdownSec.style.display = "none";
        }
        if (dropdownSec.id === e.dataset.section) {
            dropdownSec.style.display = "block";
            inputSec.style.display = "none";
            buttonSec.style.display = "none";
        }
    });
});
