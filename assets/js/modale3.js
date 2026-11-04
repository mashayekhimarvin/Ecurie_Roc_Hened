const poulains = {
    poulain: {
        photos: [
            {
                image: "images/poulains/Qo pilote d'Hened pegase van't ruytershof.jpg",
                texte: "Qo pilote d'Hened pegase van't ruytershof"
            },
            {
                image: "images/poulains/pactole d'hened.jpg",
                texte: "Pactole d'hened : Ermitage kalone x jungle des forêts"
            },
            {
                image: "images/poulains/pachamama d'hened.jpg",
                texte: "Pachamama d'hened : Colestus x jungle est forets"
            },
            {
                image: "images/poulains/Phuricas d'hened.jpg",
                texte: "Phuricas d'hened : Uricas vd kattevennen x Jungle des forêts"
            },
        ]
    }
};

// Ouvrir la modale

const modal = document.getElementById("modal3Photos");
const photoPrincipale = document.getElementById("photoPrincipale");
const miniatures = document.getElementById("miniatures");
const titre = document.getElementById("modal3Titre");
const descriptionPhoto = document.getElementById("descriptionPhoto");



document.querySelectorAll(".btn-photos").forEach(button => {

    button.addEventListener("click", () => {

        titre.textContent = "Nos poulains";

        const idPoulain = button.dataset.poulain;

        const poulain = poulains[idPoulain];
        

        photoPrincipale.src = poulain.photos[0].image;
        descriptionPhoto.textContent = poulain.photos[0].texte;

        miniatures.innerHTML = "";

        poulain.photos.forEach(photo => {

            const img = document.createElement("img");

            img.src = photo.image;

            img.addEventListener("click", () => {
                photoPrincipale.src = photo.image;
                descriptionPhoto.textContent = photo.texte;
            });

            miniatures.appendChild(img);

        });

        modal.style.display = "flex";

    });

});

// Fermeture

modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});


