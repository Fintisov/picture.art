import wow from "wow.js/dist/wow.min";
import modal from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
    new wow().init();

    modal();
})