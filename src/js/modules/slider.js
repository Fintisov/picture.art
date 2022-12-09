const slider = (itemSlide,
                prev,
                next,
                animatePrev = "zoomIn",
                animateNext = "zoomIn") => {
    const slide = document.querySelectorAll(itemSlide);
    let pauser = setInterval(nextSlide, 3000);

    let startSlide = 0;

    function showSlide(countSlide, animate) {
        slide.forEach(elem => {
            elem.style.display = "none";
            elem.classList.remove(animatePrev);
            elem.classList.remove(animateNext);
        })

        slide[countSlide].classList.add(animate);
        slide[countSlide].style.display = "block";
    }

    function prevSlide() {
        startSlide--
        if (startSlide < 0) {
            startSlide = slide.length - 1;
        }
        showSlide(startSlide, animatePrev);
    }

    function nextSlide() {
        startSlide++
        if (startSlide >= slide.length) {
            startSlide = 0;
        }
        showSlide(startSlide, animateNext);
    }

    slide.forEach(elem => {
        elem.classList.add("animated");
        elem.style.display = "none";
    });

    slide[0].parentElement.addEventListener("mouseover", () => {
        clearInterval(pauser)
    });

    slide[0].parentElement.addEventListener("mouseout", () => {
        pauser = setInterval(nextSlide, 3000);
    });

    function showFirstSlide() {
        slide[0].style.display = "block";
        slide[0].classList.add("zoomIn");
        setTimeout(() => {
            slide[0].classList.remove("zoomIn");
        }, 1000);
    }
    showFirstSlide()
    try {
        const btnPrev = document.querySelector(prev),
            btnNext = document.querySelector(next);

        btnPrev.addEventListener("click", (e) => {
            if (e.target.closest(prev)) {
                prevSlide();
            }
        });

        btnNext.addEventListener("click", (e) => {
            if (e.target.closest(next)) {
                nextSlide();
            }
        });

    } catch (e) {
    }
}

export default slider;