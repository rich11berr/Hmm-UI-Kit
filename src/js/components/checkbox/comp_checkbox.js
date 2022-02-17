import "./radio_checkbox.scss";

class CheckBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <input
                    type="${this.getAttribute("type")}"
                    id="${this.getAttribute("id")}"
                    class=${
                        this.getAttribute("type") == "checkbox"
                            ? "hmm__checkbox"
                            : "hmm__radio"
                    }
                    ${
                        this.getAttribute("status")
                            ? this.getAttribute("status")
                            : ""
                    }
                    value="${
                        this.getAttribute("value")
                            ? this.getAttribute("value")
                            : ""
                    }"
                    name="${this.getAttribute("name")}"
                />
                <label for="${this.getAttribute("id")}">${this.getAttribute(
            "label"
        )}</label>
        `;
    }
}

window.customElements.define("hmm-checkbox", CheckBox);

class Switcher extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="hmm__switcher">
                    <input type="checkbox" id="hmm-switcher1" />
                    <label for="hmm-switcher1"></label>
                </div>
        `;
    }
}

window.customElements.define("hmm-switch", Switcher);
