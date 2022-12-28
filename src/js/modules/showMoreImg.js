import {getResurs} from "../services/request";

const showMoreImg = (trigger, container) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function () {
        getResurs("assets/db.json1")
            .then(res => {
                if (this.nextElementSibling != null && this.nextElementSibling.matches(".alert-error")) {
                    this.nextElementSibling.remove();
                }

                res["styles"].forEach(elem => {
                    const card = createCard(elem);

                    document.querySelector(container).append(card);
                })

                this.remove();
            })
            .catch(error => {
                if (this.nextElementSibling != null && this.nextElementSibling.matches(".alert-error")) {
                    this.nextElementSibling.remove();
                }

                const alertError = document.createElement("div")

                alertError.classList.add("alert-error", "animated", "bounceIn");
                alertError.textContent = "Произошла ошибка при загрузке фотографий. Повторите попытку еще раз."

                this.after(alertError);
                console.error(error)
            })


    })


    function createCard({title, src, link}) {
        const card = document.createElement("div");
        card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeIn");


        card.innerHTML = `
            <div class=styles-block>
                <img src=${src} alt="card">
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
        `;

        return card;
    }

    /*
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
        */
}

export default showMoreImg;