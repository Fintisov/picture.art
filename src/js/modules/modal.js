const modal = (triggerOpen, modal, triggerClose, modalTimer = false) => {
    const openBtn = document.querySelectorAll(triggerOpen),
        modalWindow = document.querySelector(modal),
        body = document.querySelector("body"),
        allModalWindow = document.querySelectorAll("[data-modal]"),
        timerModal = (modalTimer) ? setTimeout(showWindowByTimer, modalTimer) : false;

    function getWidthScrollBar() {
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

    function showWindowByTimer() {
        let status = false;

        allModalWindow.forEach(elem => {
            if (elem.classList.contains("show")) {
                status = true;
            }
        })

        if (status) {
            clearInterval(timerModal);
        } else {
            showWindow();
        }
    }

    function showWindow() {
        modalWindow.classList.add("show");
        body.style.cssText = `
            overflow: hidden;
            margin-right: ${getWidthScrollBar()}px;
        `;
    }

    function hiddenModal() {
        if (modalWindow.classList.contains("show")) {
            modalWindow.classList.remove("show");
        }
        body.style.cssText = `
            overflow: "",
            margin-right: 0,
        `;
    }

    openBtn.forEach(elem => {
        elem.addEventListener("click", () => {
            showWindow();
        })
    })

    modalWindow.addEventListener("click", (e) => {
        if (e.target && e.target.matches(triggerClose) || e.target.matches(modal)) {
            hiddenModal();
        }
    })
}

export default modal;