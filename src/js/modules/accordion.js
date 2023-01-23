/**
 * Create accordion
 *
 * @function
 * @param {string} trigger - accordion trigger
 *
 * @module
 *
 */

const accordion = (trigger) => {
    const accordionTrigger = document.querySelectorAll(trigger);

    accordionTrigger.forEach(elem => {
        elem.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                accordionTrigger.forEach(elem => {
                    elem.classList.remove("active")
                    elem.nextElementSibling.style.maxHeight = 0;
                    elem.nextElementSibling.classList.remove("show");
                });

                this.classList.add("active");
                this.nextElementSibling.classList.add("show");
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 60 + "px";
            } else {
                this.classList.remove("active");
                this.nextElementSibling.classList.remove("show");
                this.nextElementSibling.style.maxHeight = 0;
            }
        })
    })
};

export default accordion;