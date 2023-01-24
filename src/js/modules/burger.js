/**
 * Initialize burger menu from 992 size
 *
 * @param {string} burgerSelector - btn selector burger menu
 * @param {string} burgerMenuSelector - burger menu selector
 *
 */

const burger = (burgerSelector, burgerMenuSelector) => {
    const burgerTrigger = document.querySelector(burgerSelector),
        burgerMenu = document.querySelector(burgerMenuSelector);

    burgerMenu.style.display = "none";

    burgerTrigger.addEventListener("click", () => {
        if (burgerMenu.style.display === "none" && window.screen.availWidth <= 992) {
            burgerMenu.style.display = "block";
        } else {
            burgerMenu.style.display = "none";
        }
    })

    window.addEventListener("resize", () => {
        if (window.screen.availWidth >= 993) burgerMenu.style.display = "none";

    })
}

export default burger;