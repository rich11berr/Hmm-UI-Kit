import "./input.scss";

class Input extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="hmm__inputgroup">
                    <label class="hmm__inputgroup-label" for="${this.getAttribute(
                        "id"
                    )}"
                        >${this.getAttribute("placeholder-label")}</label
                    >
                    <i><slot name="icon" /></i>
                    <input
                        class="hmm__inputgroup-input"
                        id="${this.getAttribute("id")}"
                        type="text"
                        placeholder="${this.getAttribute("placeholder")}"
                        ${
                            this.getAttribute("type") == "tel"
                                ? "data-tel-input"
                                : ""
                        }
                        ${
                            this.getAttribute("status")
                                ? this.getAttribute("status")
                                : ""
                        }
                        ${
                            this.getAttribute("value")
                                ? `value=${this.getAttribute("value")}`
                                : ""
                        }
                    />
                </div>
        `;
    }
}

window.customElements.define("hmm-input", Input);
