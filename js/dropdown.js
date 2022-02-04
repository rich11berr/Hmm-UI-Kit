const selected = document.querySelector(".hmm__selected");
const optionsContainer = document.querySelector(".hmm__option_container");
const searchBox = document.querySelector(".hmm__search-box input");
const optionList = document.querySelectorAll(".hmm__option");
const clear = document.querySelector(".hmm__dropbox_clear");
const del = document.querySelector(".hmm__dropbox_del");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    searchBox.value = "";
    filterList("");
    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

let clearList = function () {
    optionList.forEach((o) => {
        o.style.display = "block";
    });
};

optionList.forEach((o) => {
    let selectCheck = selected.innerHTML;
    let prevState;
    o.addEventListener("click", () => {
        if (selected.innerHTML === selectCheck) {
            selected.innerHTML = o.querySelector("label").innerHTML;
            o.style.display = "none";
            optionsContainer.classList.remove("active");
            clear.style.display = "block";
            clear.addEventListener("click", () => {
                selected.innerHTML = selectCheck;
                clearList;
                optionsContainer.classList.remove("active");
                clear.style.display = "none";
            });
        } else {
            prevState = selected.innerHTML;
            selected.innerHTML += ", " + o.querySelector("label").innerHTML;
            console.log(selected.innerHTML);
            clear.addEventListener("click", () => {
                selected.innerHTML = selectCheck;
                optionsContainer.classList.remove("active");
                clear.style.display = "none";
                del.style.display = "none";
                clearList;
            });
            del.style.display = "block";
            o.style.display = "none";
            del.addEventListener("click", () => {
                selected.innerHTML = prevState;
                del.style.display = "none";
                o.style.display = "block";
            });
        }
    });
});
searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
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
