
class Partie {
    constructor() {
        this.listeGuerriersRouge = [];
        this.listeGuerriersBleu = [];
        this.chateauRouge = new Chateau("Rouge");
        this.chateauBleu = new Chateau("Bleu");
        this.plateau = new Plateau();
        this.tour = 0;

    }

    lancerPartie() {
        if (this.chateauRouge.getListeDattente().length === 0 && this.chateauBleu.getListeDattente().length === 0) {
            alert("Vous n'avez pas entrainé des unités dans les deux chateaux !");
        } else {
            lancer.style.display = "none";
            NextTourBtn.style.display = "inline";
            this.chateauBleu.sortirGuerrier();
            this.chateauRouge.sortirGuerrier();
            this.majListe();
            this.placerGuerriers();
            console.log("Les premières unités ont été créées ou attendent d'avoir suffisamment de ressources. \n Lancez le premier tour.");
            console.log("Plateau en début de jeu : ");
            this.miseEnJeu();
        }
    }

    nouveauTour() {
        this.tour++;
        console.log("------------------ Tour : " + this.tour + " ------------------");

        this.chateauBleu.setRessources(this.chateauBleu.getRessources() + 1);
        this.chateauRouge.setRessources(this.chateauRouge.getRessources() + 1);

        this.plateau.avancerLesUnites();
        this.chateauBleu.sortirGuerrier();
        this.chateauRouge.sortirGuerrier();
        this.chateauBleu.afficherArmee();
        this.chateauRouge.afficherArmee();
        this.majListe();
        this.placerGuerriers();
        this.plateau.verifRencontreGuerrier(this.getChateauBleu(), this.getChateauRouge());
        let couleur = this.plateau.gagner(this.chateauBleu, this.chateauRouge);
        if (couleur !== "Noir") {
            console.log(couleur + " a gagner");
            msg.innerHTML = `Les Guerries ${couleur} ont gagné `;

            NextTourBtn.style.display = "none";
            trainBleuButton.style.display = "none";
            trainRougeButton.style.display = "none";
            waitListBtnB.style.display = "none";
            waitListBtnR.style.display = "none";

        }

        this.miseEnJeu();
    }

    placerGuerriers() {
        for (let guerrier of this.listeGuerriersBleu) {
            this.plateau.placerGuerrier(guerrier, this.chateauBleu.getCouleur());
        }
        this.listeGuerriersBleu = [];
        for (let guerrier of this.listeGuerriersRouge) {
            this.plateau.placerGuerrier(guerrier, this.chateauRouge.getCouleur());
        }
        this.listeGuerriersRouge = [];
    }

    majListe() {
        this.listeGuerriersBleu = this.chateauBleu.getListeTemp().slice();
        this.listeGuerriersRouge = this.chateauRouge.getListeTemp().slice();
    }

    gagnerDirect() {
        let couleur = "Noir";
        if (this.chateauBleu.getListeGuerriers().length === 0 && this.chateauBleu.getListeDattente().length === 0 && this.plateau.carreaux[0].getListeRouge().length > 0) {
            couleur = this.chateauRouge.getCouleur();
        }
        if (this.chateauRouge.getListeGuerriers().length === 0 && this.chateauRouge.getListeDattente().length === 0 && this.plateau.carreaux[4].getListeBleu().length > 0) {
            couleur = this.chateauBleu.getCouleur();
        }
        return couleur;
    }

    getChateauRouge() {
        return this.chateauRouge;
    }

    getChateauBleu() {
        return this.chateauBleu;
    }

    setChateauRouge(chateauRouge) {
        this.chateauRouge = chateauRouge;
    }

    setChateauBleu(chateauBleu) {
        this.chateauBleu = chateauBleu;
    }

    miseEnJeu() {

        const infoBox = document.createElement('div');
        infoBox.style.position = 'absolute';
        infoBox.style.backgroundColor = 'white';
        infoBox.style.border = '1px solid #ccc';
        infoBox.style.padding = '10px';
        infoBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        infoBox.style.display = 'none';
        infoBox.style.zIndex="1500";

        const plateaux = this.plateau.getCarreaux();
        plateaux.forEach((carreau, index) => {
            const bleuList = document.getElementById(`l${index}`);
            const rougeList = document.getElementById(`l${index}`);
            bleuList.innerHTML = '';
            rougeList.innerHTML = '';



            carreau.getListeBleu().forEach(guerrier => {
                const img = document.createElement('img');
                img.src = guerrier.getImageSrc();
                img.style.backgroundColor = "rgba(106, 106, 248, 0.7)"
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                img.addEventListener('mouseover', () => {
                    infoBox.innerHTML = guerrier.afficheInfosGuerriers();
                    infoBox.style.display = 'block';
                    const rect = img.getBoundingClientRect();
                    infoBox.style.top = `${rect.top + window.scrollY}px`;
                    infoBox.style.left = `${rect.right + window.scrollX + 10}px`; 
                    document.body.appendChild(infoBox);
                });
                img.addEventListener('mouseout', () => {
                    infoBox.style.display = 'none';
                    document.body.removeChild(infoBox);
                });
                bleuList.appendChild(img);
            });
            carreau.getListeRouge().forEach(guerrier => {
                const img = document.createElement('img');
                img.src = guerrier.getImageSrc();
                img.style.backgroundColor = "rgba(209, 67, 67, 0.7)"
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                img.addEventListener('mouseover', () => {
                infoBox.innerHTML = guerrier.afficheInfosGuerriers();
                infoBox.style.display = 'block';
                const rect = img.getBoundingClientRect();
                infoBox.style.top = `${rect.top + window.scrollY}px`;
                infoBox.style.left = `${rect.right + window.scrollX + 10}px`; 
                document.body.appendChild(infoBox);
                });
                img.addEventListener('mouseout', () => {
                    infoBox.style.display = 'none';
                    document.body.removeChild(infoBox);
                });
                rougeList.appendChild(img);
            });
        });
    }
}
