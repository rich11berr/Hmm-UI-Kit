import "./button.scss";

class Button extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <button class="hmm__button">${this.getAttribute("text")}</button>
            `;
        this.querySelector(".hmm__button").classList.add(
            `--${this.getAttribute("color")}`
        );
    }
}

window.customElements.define("hmm-button", Button);
