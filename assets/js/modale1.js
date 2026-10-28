const chevaux = {

    cheval1: {
        photos: [
            "images/vente/cheval1/cheval11.jpg",
            "images/vente/cheval1/cheval12.jpg",
            "images/vente/cheval1/cheval13.jpg"
        ]
    },

     cheval2: {
        photos: [
            "images/vente/cheval2/cheval21.jpg",
            "images/vente/cheval2/cheval22.jpg",
            "images/vente/cheval2/cheval23.jpg"
        ]
    }

/*     cheval3: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    } */

/*     cheval4: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    } */

 

/*     cheval5: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    } */

/*     cheval6: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    } */

};

// Ouvrir la modale
const modal = document.getElementById("modalPhotos");
const photoPrincipale = document.getElementById("photoPrincipale");
const miniatures = document.getElementById("miniatures");
const titre = document.getElementById("modalTitre");

document.querySelectorAll(".btn-photos").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".horse-card");

        const titreCheval = card.querySelector(".horse-title").textContent;

        document.getElementById("modalTitre").textContent = titreCheval;

        const idCheval = button.dataset.cheval;

        const cheval = chevaux[idCheval];

        photoPrincipale.src = cheval.photos[0];

        miniatures.innerHTML = "";

        cheval.photos.forEach(photo => {

            const img = document.createElement("img");

            img.src = photo;

            img.addEventListener("click", () => {
                photoPrincipale.src = photo;
            });

            miniatures.appendChild(img);

        });

        modal.style.display = "flex";

    });

});



//Fermeture
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});