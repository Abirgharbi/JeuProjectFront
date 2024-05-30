

class Plateau {
    constructor() {
        this.NB_CARREAUX = 5;
        this.listeTemp = [];
        this.carreaux = [];
        this.nbCarreaux = 0;
        this.ajouterCarreauMultiples(this.NB_CARREAUX);
    }

    placerGuerrier(guerrier, couleur) {
        if (couleur === 'Bleu') {
            this.carreaux[0].ajouterGuerrier(guerrier, couleur);
        } else {
            this.carreaux[4].ajouterGuerrier(guerrier, couleur);
        }
    }

    ajouterUnCarreau(nbCarreau) {
        let carreau = new Carreau(nbCarreau);
        this.carreaux[carreau.getNumeroDeLaCase()] = carreau;
        this.nbCarreaux++;
    }

    ajouterCarreauMultiples(nbCases) {
        for (let i = 0; i < nbCases; i++) {
            this.ajouterUnCarreau(i);
        }
    }

    avancerLesUnites() {
        this.listeTemp = [];
        for (let i = 0; i < 5; i++) {
            if (this.carreaux[i].getListeRouge().length > 0 && this.carreaux[i].getListeBleu().length === 0) {
                this.listeTemp = this.listeTemp.concat(this.carreaux[i].getListeRouge());
                this.carreaux[i - 1].getListeRouge().push(...this.listeTemp);
                this.carreaux[i].getListeRouge().length = 0;
                this.listeTemp = [];
            }
        }
        for (let i = 4; i >= 0; i--) {
            if (this.carreaux[i].getListeRouge().length === 0 && this.carreaux[i].getListeBleu().length > 0) {
                this.listeTemp = this.listeTemp.concat(this.carreaux[i].getListeBleu());
                this.carreaux[i + 1].getListeBleu().push(...this.listeTemp);
                this.carreaux[i].getListeBleu().length = 0;
                this.listeTemp = [];
            }
        }
    }



    verifRencontreGuerrier(chBleu, chRouge) {
        this.carreaux.forEach(carreau => {
            carreau.batailleArmée(chBleu, chRouge);
        });
    }

    gagner() {
        let couleur = 'Noir';
        let carreau0 = this.carreaux[0];
        let carreau4 = this.carreaux[4];
        if (carreau0.getListeRouge().length > 0) {
            couleur = "Rouge";
        }
        if (carreau4.getListeBleu().length > 0) {
            couleur = 'Bleu';
        }
        return couleur;
    }

    getCarreaux() {
        return this.carreaux;
    }

    getNbCarreaux() {
        return this.nbCarreaux;
    }

    setCarreaux(carreaux) {
        this.carreaux = carreaux;
    }

    setNbCarreaux(nbCarreaux) {
        this.nbCarreaux = nbCarreaux;
    }
}
