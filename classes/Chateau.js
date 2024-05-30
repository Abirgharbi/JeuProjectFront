
class Chateau {
    constructor(couleur) {
        this.listeGuerriers = [];
        this.listeDattente = [];
        this.listeTemp = [];
        this.ressources = 3;
        this.couleur = couleur;
    }

    sortirGuerrier() {
        this.listeTemp = [];
        let ressources = this.getRessources();
        while (ressources !== 0 && this.listeDattente.length !== 0) {
            let guerrier = this.listeDattente[0];
            if (guerrier.getCout() <= ressources) {
                console.log("Ressources = " + ressources + ". Guerrier = " + guerrier.getCout() + " " + guerrier.getType());
                this.listeGuerriers.push(guerrier);
                this.listeTemp.push(guerrier);
                this.listeDattente.shift();
                this.ressources -= guerrier.getCout();
                ressources = this.getRessources();
                console.log("Ajouter à la liste principal.");
            } else {
                console.log("Ressources = " + ressources + ". Cout guerrier = " + guerrier.getCout());
                console.log("Reste dans la liste d'attente.");
                ressources = 0;
            }
        }
    }


    creerUnNain() {
        let nain = new Nain();
        this.listeDattente.push(nain);
    }


    creerChefNain() {
        let nain = new ChefNain();
        this.listeDattente.push(nain);
    }


    creerUnElfe() {
        let elfe = new Elfe();
        this.listeDattente.push(elfe);
    }


    creerChefElfe() {
        let elfe = new ChefElfe();
        this.listeDattente.push(elfe);
    }


    nettoyerLaListe() {
        this.listeGuerriers = [];
        this.listeDattente = [];
    }

  
    afficherArmee() {
        let nbGuerriers = this.listeGuerriers.length;
        if (nbGuerriers !== 0) {
            console.log("Chateau " + this.getCouleur() + " : " + nbGuerriers + " guerrier(s) dans votre armée (Au combat)!");
        } else {
            alert("train please your worriors !!! chateau ",this.getCouleur);
                }
    }

  

    getListeTemp() {
        return this.listeTemp;
    }

    getCouleur() {
        return this.couleur;
    }

    setRessources(ressources) {
        this.ressources = ressources;
    }

    getRessources() {
        return this.ressources;
    }

    getListeDattente() {
        return this.listeDattente;
    }

    getListeGuerriers() {
        return this.listeGuerriers;
    }

    setListeGuerriers(listeGuerriers) {
        this.listeGuerriers = listeGuerriers;
    }

    setCouleur(couleur) {
        this.couleur = couleur;
    }

    setListeDattente(listeDattente) {
        this.listeDattente = listeDattente;
    }

    setListeTemp(listeTemp) {
        this.listeTemp = listeTemp;
    }
}
