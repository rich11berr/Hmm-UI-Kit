//components
import "./components/dropdown/comp_dropdown";
import "./components/input/comp_input";
import "./components/button/comp_button";
import "./components/dragDrop/comp_dragdrop";
import "./components/dialog/comp_dialog";
import "./components/fileUpload/comp_fileUpload";
import "./components/checkbox/comp_checkbox";
import "./components/tree/comp_tree";
//scripts
import "./components/fileUpload/fileUpload";
import "./components/tree/tree";
import "./components/dropdown/dropdown";
import "./components/input/telMask";
import "./components/dragDrop/dragDrop";
import "./components/dialog/dialog";
//styles
import "../styles/main.scss";

//nav
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
