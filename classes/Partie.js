
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
            console.log("Vous n'avez pas entrainé des unités dans les deux chateaux !");
        } else {
            this.chateauBleu.sortirGuerrier();
            this.chateauRouge.sortirGuerrier();
            this.majListe();
            this.placerGuerriers();
            console.log("Les premières unités ont été créées ou attendent d'avoir suffisamment de ressources. \n Lancez le premier tour.");
            console.log("Plateau en début de jeu : ");
            this.updateBoard();
        }
    }

    nouveauTour() {
        this.tour++;
        console.log("------------------ Tour : " + this.tour + " ------------------");
       
            this.chateauBleu.setRessources(this.chateauBleu.getRessources() + 1);
            this.chateauRouge.setRessources(this.chateauRouge.getRessources() + 1);
            this.chateauBleu.afficherArmee();
            this.chateauRouge.afficherArmee();
            this.plateau.avancerLesUnites();
            this.chateauBleu.sortirGuerrier();
            this.chateauRouge.sortirGuerrier();
            this.majListe();
            this.placerGuerriers();
            this.plateau.verifRencontreGuerrier(this.getChateauBleu(), this.getChateauRouge());
            let couleur = this.plateau.gagner();
            if (couleur !== "Noir") {
                console.log(couleur+" a gagner");
                NextTourBtn.style.display="none";
                trainBleuButton.style.display="none";
                trainRougeButton.style.display="none";
                waitListBtnB.style.display="none";
                waitListBtnR.style.display="none";
              


            }
        
        this.updateBoard();
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

    updateBoard() {
        const plateaus = this.plateau.getCarreaux();
        plateaus.forEach((carreau, index) => {
            const bleuList = document.getElementById(`l${index}`);
            const rougeList = document.getElementById(`l${index}`);
            bleuList.innerHTML = '';
            rougeList.innerHTML = '';
            carreau.getListeBleu().forEach(guerrier => {
                const img = document.createElement('img');
                img.src = guerrier.getImageSrc();
                img.style.backgroundColor ="rgba(106, 106, 248, 0.7)"
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                bleuList.appendChild(img);
            });
            carreau.getListeRouge().forEach(guerrier => {
                const img = document.createElement('img');
                img.src = guerrier.getImageSrc();
                img.style.backgroundColor ="rgba(209, 67, 67, 0.7)"
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                rougeList.appendChild(img);
            });
        });
    }
}
