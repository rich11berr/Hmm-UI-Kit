import "./dropDown.scss";

class DropBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="hmm__dropbox">
        <div class="hmm__dropbox_selectBox">
            <div class="hmm__option_container">
            </div>
            <div class="hmm__selected">${this.getAttribute("placeholder")}</div>
            <div class="hmm__search-box">
                <input type="text " placeholder="${this.getAttribute(
                    "search-placeholder"
                )}">
            </div>
        </div>
    </div>
        `;
        const optionsBox = this.querySelector(".hmm__option_container");
        this.getAttribute("options")
            .split(",")
            .forEach((option) => {
                optionsBox.innerHTML += `
            <div class="hmm__option">
                    <input type="radio" class="radio">
                    <label>${option}</label>
                </div>
            `;
            });
    }
}

window.customElements.define("drop-down", DropBox);
