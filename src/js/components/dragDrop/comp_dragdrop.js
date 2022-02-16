import "./dragDrop.scss";

class DragDrop extends HTMLElement {
    constructor() {
        super();
        this.getAttribute("options")
            .split(";")
            .forEach((div) => {
                console.log(div);
                this.innerHTML += `
            <div class="dragZone hmm__dragzone">
                ${div.split(" ").map((el) => {
                    let par = `<p class="hmm__draggable" draggable="true">${el}</p>`;
                    return par;
                })}
            </div>
            `;
            });
    }
}

window.customElements.define("drag-drop", DragDrop);
