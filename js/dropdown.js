const dropdowns = document.querySelectorAll("[data-dropdown]");

if (dropdowns.length > 0) {
    dropdowns.forEach((dropdown) => {
        createCustomDropdown(dropdown);
    });
}

function createCustomDropdown(dropdown) {
    const options = dropdown.querySelectorAll("option");
    const optionsArr = Array.prototype.slice.call(options);

    const customDropdown = document.createElement("div");

    customDropdown.classList.add("dropdown");
    dropdown.insertAdjacentElement("afterend", customDropdown);

    const selected = document.createElement("div");
    selected.classList.add("dropdown__selected");
    selected.textContent = optionsArr[0].textContent;
    customDropdown.appendChild(selected);

    const menu = document.createElement("div");
    menu.classList.add("dropdown__menu");
    customDropdown.appendChild(menu);
    selected.addEventListener("click", toggleDropdown.bind(menu));

    const search = document.createElement("input");
    search.placeholder = "Search...";
    search.type = "text";
    search.classList.add("dropdown__menu_search");
    menu.appendChild(search);

    const menuItemsWrapper = document.createElement("div");
    menuItemsWrapper.classList.add("dropdown__menu_item");
    menu.appendChild(menuItemsWrapper);

    optionsArr.forEach((option) => {
        const item = document.createElement("div");
        item.classList.add("dropdown__menu_item");
        item.dataset.value = option.value;
        item.textContent = option.textContent;
        menuItemsWrapper.appendChild(item);

        item.addEventListener(
            "click",
            setSelected.bind(item, selected, dropdown, menu)
        );
    });

    menuItemsWrapper.querySelector("div").classList.add("selected");

    search.addEventListener(
        "input",
        filterItems.bind(search, optionsArr, menu)
    );
    document.addEventListener(
        "click",
        closeIfClickedOutside.bind(customDropdown, menu)
    );
    dropdown.style.display = "none";
}

function toggleDropdown() {
    if (this.offsetParent !== null) {
        this.style.display = "none";
    } else {
        this.style.display = "block";
        this.querySelector("input").focus();
    }
}

function setSelected(selected, dropdown, menu) {
    const value = this.dataset.value;
    const label = this.textContent;

    selected.textContent = label;
    dropdown.value = value;

    menu.style.display = "none";
    menu.querySelector("input").value = "";
    menu.querySelectorAll("div").forEach((div) => {
        if (div.classList.contains("selected")) {
            div.classList.remove("selected");
        }
        if (div.offsetParent === null) {
            div.style.display = "none";
        }
    });
    this.classList.add("selected");
}

function filterItems(itemsArr, menu) {
    const customOptions = menu.querySelectorAll(".dropdown__menu_items div");
    const value = this.value.toLowerCase();
    const filteredItems = itemsArr.filter((item) =>
        item.value.toLowerCase().includes(value)
    );
    const indexesArr = filteredItems.map((item) => itemsArr.indexOf(item));

    itemsArr.forEach((option) => {
        if (!indexesArr.includes(itemsArr.indexOf(option))) {
            customOptions[itemsArr.indexOf(option)].style.display = "none";
        } else {
            if (customOptions[itemsArr.indexOf(option)].offsetParent === null) {
                customOptions[itemsArr.indexOf(option)].style.display = "block";
            }
        }
    });
}

function closeIfClickedOutside(menu, e) {
    if (
        e.target.closest(".dropdown") === null &&
        e.target !== this &&
        menu.offsetParent !== null
    ) {
        menu.style.display = "none";
    }
}
