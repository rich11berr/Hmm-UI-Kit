const selected = document.querySelector(".hmm__selected");
const optionsContainer = document.querySelector(".hmm__option_container");
const searchBox = document.querySelector(".hmm__search-box input");
const optionList = document.querySelectorAll(".hmm__option");
const clear = document.querySelector(".hmm__dropbox_clear");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    searchBox.value = "";
    filterList("");
});

let clearList = function () {
    optionList.forEach((o) => {
        o.style.display = "block";
    });
};

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
    let prevState;
    o.addEventListener("click", () => {
        if (selected.innerHTML === selectCheck) {
            o.style.display = "none";
            selected.innerHTML = `<span class="hmm__selected_span">${
                o.querySelector("label").innerHTML
            }</span>`;
            optionsContainer.classList.remove("active");
            clear.style.display = "block";
            clear.addEventListener("click", () => {
                selected.innerHTML = selectCheck;
                clearList();
                optionsContainer.classList.remove("active");
                clear.style.display = "none";
            });
        } else {
            o.style.display = "none";
            prevState = selected.innerHTML;
            selected.innerHTML += `<span class="hmm__selected_span">${
                o.querySelector("label").innerHTML
            }</span>`;
            console.log(selected.innerHTML);
            clear.addEventListener("click", () => {
                selected.innerHTML = selectCheck;
                clearList();
                optionsContainer.classList.remove("active");
                clear.style.display = "none";
            });
        }
        let items = document.querySelectorAll(".hmm__selected_span");
        items.forEach((item) => {
            item.addEventListener("click", () => {
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
