import "./fileUpload.scss";

class FileUpload extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <form class="hmm__form">
                <div class="hmm__fileInput">
                    <label for="hmm-upload1">${this.getAttribute(
                        "labelText"
                    )}</label>
                    <input
                        type="file"
                        id="hmm-upload1"
                        accept=".jpg, .jpeg, .png"
                        multiple
                    />
                </div>
                <div class="hmm__filePreview" id="filePreview1">
                    <p>${this.getAttribute("placeholder")}</p>
                </div>
                <button class="hmm__button --green">${this.getAttribute(
                    "submitText"
                )}</button>
            </form>
        `;
    }
}

window.customElements.define("file-upload", FileUpload);
