const selected = document.querySelector(".hmm__selected");
const optionsContainer = document.querySelector(".hmm__option_container");
const searchBox = document.querySelector(".hmm__search-box input");
const optionList = document.querySelectorAll(".hmm__option");
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    searchBox.value = "";
    filterList("");
    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});
optionList.forEach((o) => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
});
const filterList = (searchTerm) => {
    // searchTerm =searchTerm.toLowerCase();
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
