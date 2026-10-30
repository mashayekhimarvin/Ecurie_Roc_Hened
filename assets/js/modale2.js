const installations = {

     ecurie: {
        photos: [
            "images/installations/instal_pre2.jpg",
            "images/installations/installations_ecurie3.jpg",
            "images/installations/instal_douche.jpg",
            "images/installations/installations_ecurie2.jpg",
            "images/installations/installations_ecurie1.jpg"
            
        ]
    },

     manege: {
        photos: [
            "images/installations/instal_manege.jpg",
            "images/installations/instal_manege2.jpg",
            "images/installations/installation_manege2.jpeg"
        ]
    },

     pres: {
        photos: [
            "images/installations/installations_pres7.jpg",
            "images/installations/instal_pre1.jpg",
            "images/installations/instal_pre3.jpg",
            "images/installations/instal_abris_pre.jpg",
            "images/installations/instal_pre4.jpg",
            "images/installations/instal_pre5.jpg",
            "images/installations/instal_pre6.jpg",
            "images/installations/installation_pres_8.jpg"
        ]
    },

     carriere: {
        photos: [
            "images/installations/installation_carriere2.jpeg",
            "images/installations/instal_carriere2.jpg",
            "images/installations/installation_carriere3.jpg"
        ]
    },

 

/*      transport: {
        photos: [
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    }, */

/*      longe: {
        photos: [
            "images/installations/rond_longe.jpgg",
            "images/vente/quartz/xx.jpg",
            "images/vente/quartz/xx.jpg"
        ]
    },
 */
};

// Ouvrir la modale


const modal = document.getElementById("modal2Photos");
const photoPrincipale = document.getElementById("photoPrincipale");
const miniatures = document.getElementById("miniatures");
const titre = document.getElementById("modal2Titre");

document.querySelectorAll(".btn-photos").forEach(button => {

    button.addEventListener("click", () => {

        const section = button.closest("section");

        const titreInstallations = section.querySelector("h2").textContent;

        document.getElementById("modal2Titre").textContent = titreInstallations;

        const idInstallations = button.dataset.installations;

        const instal = installations[idInstallations];

        photoPrincipale.src = instal.photos[0];

        miniatures.innerHTML = "";

        instal.photos.forEach(photo => {

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