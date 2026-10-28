document.querySelectorAll(".btn-voir-plus").forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const bloc =
            this.parentElement.querySelector(".infos-complementaires");

        bloc.classList.toggle("active");

        this.textContent =
            bloc.classList.contains("active")
                ? "Voir moins..."
                : "Voir plus...";

    });

});