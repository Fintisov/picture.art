import wow from "wow.js/dist/wow.min";
import modal from "./modules/modal";
import slider from "./modules/slider";
import sendForms from "./modules/sendForms";
import inputMask from "./modules/inputMask";
import checkTextInput from "./modules/checkTextInput";
import showMoreImg from "./modules/showMoreImg";
import calculator from "./modules/calculator";
import filter from "./modules/filter";

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

    checkTextInput("[name='name']");
    checkTextInput("[name='message']");

    showMoreImg(".button-styles", "#styles .row");

    calculator("#size", "#material", "#options", ".promocode", ".calc-price");

    filter();
})