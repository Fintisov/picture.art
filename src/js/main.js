import wow from "wow.js/dist/wow.min";
import modal from "./modules/modal";
import slider from "./modules/slider";
import sendForms from "./modules/sendForms";
import inputMask from "./modules/inputMask";

document.addEventListener("DOMContentLoaded", () => {
    new wow().init();
    modal();
    slider(".feedback-slider-item",
        ".main-prev-btn",
        ".main-next-btn",
        "fadeInRight",
        "fadeInLeft");

    slider(".main-slider-item",
        "",
        "",
        "fadeInUp",
        "fadeInDown",
    );

    sendForms();

    inputMask("[name='phone']");
})