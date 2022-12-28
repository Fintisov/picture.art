const showMoreImg = (trigger, items) => {
    const cards = document.querySelectorAll(items),
        btn = document.querySelector(trigger);

    cards.forEach(elem => {
        elem.classList.add("animated", "fadeIn");
    })

    btn.addEventListener("click", () => {
        cards.forEach(elem => {
            elem.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2",);
            elem.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        })

        btn.remove();
    })
}

export default showMoreImg;