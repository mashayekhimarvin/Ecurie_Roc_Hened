document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".resultats-scroll");
    const cards = document.querySelectorAll(".resultat-card");
    const dots = document.querySelectorAll(".dot");
    

    let currentIndex = 0;

    function updateDots() {

        dots.forEach(dot => dot.classList.remove("active"));

        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }

    }

    function goToCard(index) {

        currentIndex = index;

        container.scrollTo({
            left: cards[index].offsetLeft,
            behavior: "smooth"
        });

        updateDots();
        updateButtons();

    }

    document.querySelector(".next").addEventListener("click", (event) => {

        event.preventDefault();

        if (currentIndex < cards.length - 1) {
            goToCard(currentIndex + 1);
        }

    });

    document.querySelector(".prev").addEventListener("click", (event) => {

        event.preventDefault();

        if (currentIndex > 0) {
            goToCard(currentIndex - 1);
        }

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            goToCard(index);
        });

    });

        container.addEventListener("scroll", () => {

        const scrollLeft = container.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {

            const distance = Math.abs(card.offsetLeft - scrollLeft);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }

        });

        currentIndex = closestIndex;
        updateDots();
        updateButtons();

    });


    function updateButtons() {

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    prevBtn.classList.toggle("disabled", currentIndex === 0);
    nextBtn.classList.toggle("disabled", currentIndex === cards.length - 1);

    }

    function updateNavigationVisibility() {

        const navigation = document.querySelector(".carousel-navigation");

        if (container.scrollWidth <= container.clientWidth) {
            navigation.style.display = "none";
        } else {
            navigation.style.display = "flex";
        }

    }

    // Initialisation
    updateDots();
    updateButtons();
    updateNavigationVisibility();

    window.addEventListener("resize", () => {

        updateNavigationVisibility();
        updateButtons();

    });

});