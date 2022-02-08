const dialogs = document.querySelectorAll(".hmm__dialog");

dialogs.forEach((dialog) => {
    dialog.parentElement
        .querySelector(".hmm__dialog_close")
        .addEventListener("click", () => {
            dialog.style.display = "none";
        });
});
