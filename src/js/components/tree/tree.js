const carets = document.querySelectorAll(".hmm__tree_caret");

carets.forEach((caret) => {
    caret.addEventListener("click", () => {
        caret.parentElement
            .querySelector(".hmm__tree_nested")
            .classList.toggle("tree-active");
        caret.classList.toggle("caret-down");
    });
});
