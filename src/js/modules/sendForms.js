import {postData} from "../services/request";

const sendForms = () => {
    const forms = document.querySelectorAll("form"),
        upload = document.querySelectorAll("[type='file']");

    const statusForm = {
        load: "Отправка....",
        success: "Мы с Вами скоро свяжемся. ;-)",
        failure: "Что-то пошло не так. :-(",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png",
    };

    const path = {
        design: "assets/design.php",
        consultation: "assets/server.php",
    };

    const clearForms = () => {
        forms.forEach(elem => {
            elem.reset();
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        })


    };

    upload.forEach(item => {
        item.addEventListener("input", () => {
            const uploadStr = item.files[0].name.split(".");

            item.previousElementSibling.textContent = (uploadStr[0].length > 6) ?
                `${uploadStr[0].slice(0, 6)}...${uploadStr[1]}` : uploadStr.join(".");
        })
    })

    forms.forEach(el => {
        el.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(el);

                if (el.querySelector(".calc-price")) {
                    formData.append("price", el.querySelector(".calc-price").textContent);

                    el.querySelector(".calc-price").textContent = "Для расчета нужно выбрать размер картины и материал картины";
                }

                const statusMessage = document.createElement("div");
                statusMessage.classList.add("status", "animated", "bounceIn");
                statusMessage.style.cssText = `
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    `;


                const statusImg = document.createElement("img");
                statusImg.setAttribute("src", statusForm.spinner);
                statusImg.setAttribute("width", "150");
                statusImg.setAttribute("height", "150");

                const statusText = document.createElement("p");
                statusText.textContent = statusForm.load;

                statusMessage.append(statusImg);
                statusMessage.append(statusText);

                el.classList.add("animated", "fadeOutUp");
                setTimeout(() => {
                    el.style.display = "none";
                    el.parentNode.append(statusMessage)
                }, 750)

                const url = (el.closest(".popup-design") || el.closest(".form_calc")) ?
                    path.design : path.consultation;

                postData(url, formData)
                    .then(res => {
                        console.log(res);
                        statusImg.setAttribute("src", statusForm.ok);
                        statusText.textContent = statusForm.success;
                    })
                    .catch((e) => {
                        statusImg.setAttribute("src", statusForm.fail);
                        statusText.textContent = statusForm.failure;
                        console.error(e)
                    })
                    .finally(() => {
                        clearForms();

                        setTimeout(() => {
                            el.classList.remove("fadeOutUp");
                            el.style.display = "block";
                            el.classList.add("bounceIn");
                            statusMessage.remove();
                        }, 5000)
                    })
            }
        )
    })
}

export default sendForms;