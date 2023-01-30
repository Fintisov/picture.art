const smoothScroll = (speed) => {
    const triggerScroll = document.querySelectorAll('a');
    const btnUp = document.querySelector("[href='#up']");

    // (show / hidden) up button
    document.addEventListener("scroll", () => {
        if (document.documentElement.clientHeight <= document.documentElement.scrollTop) {
            btnUp.classList.add("animated", "fadeIn");
            btnUp.classList.remove("fadeOut");
        } else {
            btnUp.classList.add("fadeOut");
            btnUp.classList.remove("fadeIn");
        }
    });

    triggerScroll.forEach(elem => {
        if (elem.hash !== "") {
            const element = document.documentElement,
                to = document.querySelector(elem.hash).offsetTop;

            elem.addEventListener("click", function (event) {
                event.preventDefault();
                let scrolling = null;

                if (element.scrollTop < to) {
                    scrolling = setInterval(() => {
                        if (element.scrollTop < to) {
                            element.scrollTop += speed;
                        } else {
                            clearInterval(scrolling)
                        }
                    }, 4)
                }

                if (element.scrollTop > to) {
                    scrolling = setInterval(() => {
                        if (element.scrollTop > to) {
                            element.scrollTop -= speed;
                        } else {
                            clearInterval(scrolling)
                        }
                    }, 4)
                }
            })
        }
    });
}

export default smoothScroll;