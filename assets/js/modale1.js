const chevaux = {

    cheval1: {
        photos: [
            "images/vente/cheval1/ae8da97d-511e-457d-a2d3-9d992a39e034.jpg",
            "images/vente/cheval1/da850c1c-757b-4bb9-a05d-20ffda3aab26.jpg",
            "images/vente/cheval1/6c4195d9-bc8d-4ef8-a1a8-ebc896eb2c7b.jpg",
            "images/vente/cheval1/miss_brenda.jpg"
        ]
    },

     cheval2: {
        photos: [
            "images/vente/cheval2/Armitage1.jpg",
        ]
    },

      cheval3: {
        photos: [
             "images/vente/cheval3/025fce4a-72ba-4fb7-80f8-b49f6366cccb.jpg",
             "images/vente/cheval3/ee3e851c-3d41-4eba-b61f-cb62f86b6aca.jpg"
        ]
    },

/*     cheval4: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    }, */

 

/*     cheval5: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    }, */

/*     cheval6: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    }, */

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