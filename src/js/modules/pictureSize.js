const pictureSize = (sizeBlocks) => {
    const blocks = document.querySelectorAll(sizeBlocks);

    function showImg(block) {
        const p = block.querySelectorAll("p:not(.sizes-hit)");
        const img = block.querySelector("img");

        p.forEach(elem => {
            elem.style.display = "none"
        })

        img.src = img.src.slice(0, -4) + "-1.png";
    }

    function hiddenImg(block) {
        const p = block.querySelectorAll("p:not(.sizes-hit)");
        const img = block.querySelector("img");

        p.forEach(elem => {
            elem.style.display = "block"
        })

        img.src = img.src.slice(0, -6) + ".png";
    }

    blocks.forEach(item => {
        item.addEventListener("mouseenter", () => {
            showImg(item);
        });

        item.addEventListener("mouseleave", () => {
            hiddenImg(item);
        })
    })
}

export default pictureSize;