const filter = () => {
    const portfolioMenu = document.querySelector(".portfolio-menu"),
        portfolioMenuBtn = document.querySelectorAll(".portfolio-menu li"),
        allPhoto = document.querySelectorAll(".portfolio-wrapper .all"),
        noPortfolioImg = document.querySelector(".portfolio-no");

    portfolioMenu.addEventListener("click", (event)=> {
        const target = event.target;
        let isPortfolioImg = true;

        if (target && target.closest(".portfolio-menu li")) {
            portfolioMenuBtn.forEach(item => {
                item.classList.remove("active");
            });

            target.classList.add("active");

            noPortfolioImg.classList.add("animated");
            noPortfolioImg.classList.remove("fadeIn");
            noPortfolioImg.style.display = "none";

            // show filter img
            allPhoto.forEach(item => {
                item.classList.add("animated");
                item.classList.remove("fadeIn");
                item.style.display = "none";

                if (item.classList.contains(target.classList[0])) {
                    item.style.display = "block";
                    setInterval(()=> item.classList.add("fadeIn"));
                    isPortfolioImg = false;
                }
            });

            if (isPortfolioImg) {
                noPortfolioImg.style.display = "block";
                noPortfolioImg.classList.add("fadeIn");
            }
        }
    })
}

export default filter;