const tel = document.querySelectorAll("input[data-tel-input]");

let getInputNumberValue = function (input) {
    return input.value.replace(/\D/g, "");
};

let onPhoneInput = function (e) {
    let input = e.target,
        inputValue = getInputNumberValue(input),
        formattedValue = "",
        selectionStart = input.selectionStart;

    if (!inputValue) return (input.value = "");

    if (input.value.length != selectionStart) {
        console.log("редактирование в середине строки", e);
        if (e.data && /\D/g.test(e.data)) input.value = inputValue;
        return;
    }

    if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
        //russian
        //I'm not racist =)
        if (inputValue[0] == "9") inputValue = "7" + inputValue;
        let firstSymbols = inputValue[0] == "8" ? "8" : "+7";
        formattedValue = firstSymbols + " ";
        if (inputValue.length > 1)
            formattedValue += "(" + inputValue.substring(1, 4);
        if (inputValue.length >= 5)
            formattedValue += ") " + inputValue.substring(4, 7);
        if (inputValue.length >= 8)
            formattedValue += "-" + inputValue.substring(7, 9);
        if (inputValue.length >= 10)
            formattedValue += "-" + inputValue.substring(9, 11);
    } else {
        //not russian
        formattedValue = input.value = "+" + inputValue;
    }
    input.value = formattedValue;
};

let onPhoneKeyDown = function (e) {
    let input = e.target;
    if (e.keyCode === 8 && getInputNumberValue(input).length === 1) {
        input.value = "";
    }
};

let onPhonePaste = function (e) {
    let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputValue = getInputNumberValue(input);
    if (pasted) {
        let pastedText = pasted.getData("Text");
        if (/\D/g.text(pastedText)) input.value = inputValue;
    }
};

tel.forEach((t) => {
    t.addEventListener("input", onPhoneInput);
    t.addEventListener("keydown", onPhoneKeyDown);
    t.addEventListener("paste", onPhonePaste);
});
