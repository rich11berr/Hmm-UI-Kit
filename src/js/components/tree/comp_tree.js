import "./tree.scss";

class Tree extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <ul class="hmm__tree">
                <li>
                    <span class="hmm__tree_caret">Drinks</span>
                    <ul class="hmm__tree_nested">
                        <li>Water</li>
                        <li>Mineral water</li>
                        <li>
                            <span class="hmm__tree_caret">Soda</span>
                            <ul class="hmm__tree_nested">
                                <li>Coca-Cola</li>
                                <li>Sprite</li>
                                <li>Fanta</li>
                            </ul>
                        </li>
                        <li>
                            <span class="hmm__tree_caret">Juice</span>
                            <ul class="hmm__tree_nested">
                                <li>Apple juice</li>
                                <li>Orange juice</li>
                                <li>Grape juice</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="hmm__tree_caret">Food</span>
                    <ul class="hmm__tree_nested">
                        <li>Hamburger</li>
                        <li>
                            <span class="hmm__tree_caret">Pizza</span>
                            <ul class="hmm__tree_nested">
                                <li>Pizza with pineapple</li>
                                <li>Pizza with beef</li>
                                <li>Pizza with salami</li>
                            </ul>
                        </li>
                        <li>Sushi</li>
                    </ul>
                </li>
            </ul>
        `;
    }
}

window.customElements.define("hmm-tree", Tree);
