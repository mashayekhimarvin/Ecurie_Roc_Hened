document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".resultats-scroll");
    const cards = document.querySelectorAll(".resultat-card");

    let currentIndex = 0;

    function goToCard(index) {

        currentIndex = index;

        container.scrollTo({
            left: cards[index].offsetLeft,
            behavior: "smooth"
        });

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

});