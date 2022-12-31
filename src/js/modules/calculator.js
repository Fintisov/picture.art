import {getResurs} from "../services/request";

const calculator = (size, material, options, promo, price) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoBlock = document.querySelector(promo),
        priceBlock = document.querySelector(price);


    function calcFunc() {
        let sum = 0;

        getResurs("./assets/db.json")
            .then(res => {
                const data = res.calcPrice;
                sum = Math.round(data.size[sizeBlock.value] * data.material[materialBlock.value] + data.options[optionsBlock.value]);

                if (sizeBlock.value === "" || materialBlock.value === "") {
                    priceBlock.textContent = "Пожалуйста, сделайте выбор размера и материала картины."
                } else if (promoBlock.value.trim() === "IWANTPOPART") {
                    priceBlock.textContent = Math.round(sum * 0.7) + " грн";
                } else {
                    priceBlock.textContent = sum + " грн";
                }
            })
    }


    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promoBlock.addEventListener("input", calcFunc);
};

export default calculator;