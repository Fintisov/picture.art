import wow from "wow.js/dist/wow.min";

import modal from "./modules/modal";
import slider from "./modules/slider";
import sendForms from "./modules/sendForms";
import inputMask from "./modules/inputMask";
import checkTextInput from "./modules/checkTextInput";
import showMoreImg from "./modules/showMoreImg";
import calculator from "./modules/calculator";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import smoothScroll from "./modules/smoothScroll";
import drop from "./modules/drop";

document.addEventListener("DOMContentLoaded", () => {
    new wow().init();
    modal();
    slider(".feedback-slider-item",
        ".main-prev-btn",
        ".main-next-btn",
        "fadeInRight",
        "fadeInLeft"
    );
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
    pictureSize(".sizes-block");
    accordion(".accordion-heading");
    burger(".burger",".burger-menu");
    smoothScroll(30);
    drop();
})