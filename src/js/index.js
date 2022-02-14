import "../styles/main.scss";
import "./telMask";
import "./dialog";
import "./dragDrop";
import "./dropdown";
import "./fileUpload";
import "./tree";

const sections = document.querySelectorAll(".container");

const descr = document.querySelector(".description");

const btns = document.querySelectorAll(".nav__btn");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        descr.style.display = "none";
        for (let i = 0; i < sections.length; ++i) {
            if (sections[i].id === e.dataset.section) {
                sections[i].style.display = "block";
            } else {
                sections[i].style.display = "none";
            }
        }
    });
});
