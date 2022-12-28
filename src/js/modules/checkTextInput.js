const checkTextInput = (select) => {
    const inputs = document.querySelectorAll(select);

    inputs.forEach(elem => {
        elem.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^а-яё 0-9]/ig, '');
            e.target.value = e.target.value.trim();
        })
    })
}

export default checkTextInput;