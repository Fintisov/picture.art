const modal = () => {
    let checkOpenModal = false;

    function bindModal(triggerOpen, modal, triggerClose, destruction = false,) {

        const openBtn = document.querySelectorAll(triggerOpen),
            modalWindow = document.querySelector(modal),
            gift = document.querySelector(".fixed-gift"),
            body = document.querySelector("body");


        function showWindow() {
            modalWindow.classList.add("modal-show");
            body.style.cssText = `
            overflow: hidden;
            margin-right: ${getWidthScrollBar()}px;
        `;
            if (gift) {
                gift.style.marginRight = `${getWidthScrollBar()}px`;
            }
        }

        function hiddenModal() {
            if (modalWindow.classList.contains("modal-show")) {
                modalWindow.classList.remove("modal-show");
            }
            body.style.cssText = `
            overflow: "",
            margin-right: 0,
        `;
            if (gift) {
                gift.style.marginRight = `0`;
            }
        }

        openBtn.forEach(elem => {
            elem.addEventListener("click", () => {
                showWindow();

                if (destruction) {
                    if (elem.matches(".fixed-gift")) {
                        elem.classList.add("gift-hidden");
                        setTimeout(() => {
                            elem.remove();
                        }, 750)
                    } else {
                        elem.remove();
                    }

                }

                checkOpenModal = true;
            })
        })

        modalWindow.addEventListener("click", (e) => {
            if (e.target && e.target.matches(triggerClose) || e.target.matches(modal)) {
                hiddenModal();
            }
        })
    }

    function getWidthScrollBar() {
        const body = document.querySelector("body");

        let div = document.createElement("div"),
            result = null;

        div.style.cssText = `
          width: 50px;
          height: 50px;
          overflow-y: scroll;
          visibility: hidden;
        `;

        body.append(div);

        result = div.offsetWidth - div.clientWidth;
        div.remove();

        return result;
    }

    function showModalByTimer(selector, time) {
        setTimeout(() => {
            let status = true;

            const allModalWindow = document.querySelectorAll("[data-modal]"),
                modalWindow = document.querySelector(selector),
                gift = document.querySelector(".fixed-gift"),
                body = document.querySelector("body");


            allModalWindow.forEach(elem => {
                if (elem.classList.contains("modal-show")) {
                    status = false;
                }
            });
            if (status) {

                modalWindow.classList.add("modal-show");
                body.style.cssText = `
            overflow: hidden;
            margin-right: ${getWidthScrollBar()}px;
        `;
                if (gift) {
                    gift.style.marginRight = `${getWidthScrollBar()}px`;
                }
            }
        }, time)
    }

    function openByScroll(selector) {
        window.addEventListener("scroll", () => {
            if (!checkOpenModal) {
                let heightTotalWindow = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - 2,
                    heightVisibleWindow = document.documentElement.clientHeight,
                    scrollPositionNow = document.documentElement.scrollTop;

                if (heightTotalWindow <= (heightVisibleWindow + scrollPositionNow)) {
                    document.querySelector(selector).click();
                }
            }
        })
    }


    bindModal(".button-design", ".popup-design", ".popup-close");
    bindModal(".button-consultation", ".popup-consultation", ".popup-close");
    bindModal(".fixed-gift", ".popup-gift", ".popup-close", true);

    showModalByTimer(".popup-consultation", 3000)
    openByScroll(".fixed-gift")
}

export default modal;