import "./dialog.scss";

class Dialog extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="hmm__dialog">
                <i class="fas fa-times hmm__dialog_close"></i>
                <span class="hmm__dialog_text">${this.getAttribute(
                    "text"
                )}</span>
                <div class="hmm__dialog_btnWrap">
                    <button class="hmm__button --green">${this.getAttribute(
                        "yes"
                    )}</button>
                    <button class="hmm__button --red">${this.getAttribute(
                        "no"
                    )}</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define("hmm-dialog", Dialog);
