document.querySelectorAll(".pagina").forEach((pagina) => {
    pagina.addEventListener("mouseenter", function () {
        let imgSrc = this.getAttribute("data-image");
        let img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("fade-in");
        this.appendChild(img);
        img.style.display = "block";
        setTimeout(() => {
            img.style.opacity = "1";
        }, 50);

        let mask = document.createElement("div");
        mask.classList.add("mask", "fade-in");
        mask.innerText = this.getAttribute("data-text");
        
        this.appendChild(mask);
        setTimeout(() => {
            mask.style.opacity = "1";
        }, 500);
    });

    pagina.addEventListener("mouseleave", function () {
        let img = this.querySelector("img");
        let mask = this.querySelector(".mask");
        if (img) {
            img.style.opacity = "0";
            setTimeout(() => {
                if (this.contains(img)) this.removeChild(img);
            }, 500);
        }
        if (mask) {
            mask.style.opacity = "0";
            setTimeout(() => {
                if (this.contains(mask)) this.removeChild(mask);
            }, 500);
        }
    });
});