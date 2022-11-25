import modal from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
    modal(".button-design", ".popup-design", ".popup-close");
    modal(".button-consultation", ".popup-consultation", ".popup-close", 3000);
})