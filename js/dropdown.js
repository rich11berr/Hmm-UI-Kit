const selected = document.querySelector(".hmm__selected");
const optionsContainer = document.querySelector(".hmm__option_container");
const searchBox = document.querySelector(".hmm__search-box input");
const optionList = document.querySelectorAll(".hmm__option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    searchBox.value = "";
    filterList("");
});

const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionList.forEach((option) => {
        let label =
            option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

optionList.forEach((o) => {
    let selectCheck = selected.innerHTML;
    o.addEventListener("click", () => {
        console.log(o);
        if (selected.innerHTML === selectCheck) {
            o.remove();
            selected.innerHTML = `<span class="hmm__selected_span">${
                o.querySelector("label").innerHTML
            }</span>`;
            optionsContainer.classList.remove("active");
        } else {
            o.remove();
            selected.innerHTML += `<span class="hmm__selected_span">${
                o.querySelector("label").innerHTML
            }</span>`;
        }
        let items = document.querySelectorAll(".hmm__selected_span");
        items.forEach((item) => {
            item.addEventListener("click", () => {
                let div = document.createElement("div");
                div.classList.add("hmm__option");
                div.innerHTML = ` <input type="radio" class="radio" />
                <label for="pet">${item.textContent}</label>`;
                optionsContainer.appendChild(div);
                item.remove();
                if (selected.innerHTML == "") {
                    selected.innerHTML = selectCheck;
                }
            });
        });
    });
});

searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
});
