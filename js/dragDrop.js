const draggables = document.querySelectorAll(".hmm__draggable");
const containers = document.querySelectorAll(".hmm__dragzone");

draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("draggable_active");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("draggable_active");
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterEl = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".draggable_active");
        // console.log(afterEl);
        if (afterEl == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterEl);
        }
    });
});

function getDragAfterElement(container, y) {
    const draggableE = [
        ...container.querySelectorAll(".hmm__draggable:not(.draggable_active)"),
    ];
    console.log(draggableE);
    return draggableE.reduce(
        (closest, child) => {
            let box = child.getBoundingClientRect();
            let offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        },
        { offset: Number.POSITIVE_INFINITY }
    ).element;
}
