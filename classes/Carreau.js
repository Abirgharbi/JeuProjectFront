
class Carreau {
    constructor(nbCarreau) {
        this.listeBleu = [];
        this.listeRouge = [];
        this.numeroDeLaCase = nbCarreau;
    }

    ajouterGuerrier(guerrier, couleur) {
        if (couleur === "Rouge") {
            this.listeRouge.push(guerrier);
        } else {
            this.listeBleu.push(guerrier);
        }
    }

    bataille(chBleu, chRouge) {
        if (this.listeBleu.length !== 0 && this.listeRouge.length !== 0) {
           
            let compte = 0;
            let nbGuerriers = this.listeBleu.length + this.listeRouge.length;
            while (compte !== nbGuerriers) {
                if (this.listeRouge.length !== 0 && this.listeBleu.length !== 0) {
                    // Tour des bleus ( les bleus commencent les premiers)
                    console.log("Tour bleus :");
                    for (let i = 0; i < this.listeBleu.length; i++) {
                        if (this.listeRouge.length !== 0) {
                            let guerrier = this.listeRouge[0];
                            this.afficherBataille(this.listeBleu[i], guerrier);
                            if (guerrier.estMort()) {
                                this.listeRouge.shift();
                                chRouge.listeGuerriers = chRouge.listeGuerriers.filter(g => g !== guerrier);
                            }
                            compte++;
                        }
                    }
                }

                if (this.listeRouge.length !== 0 && this.listeBleu.length !== 0) {
                    // Tour des rouges 
                   console.log("Tour rouges :");
                    for (let i = 0; i < this.listeRouge.length; i++) {
                        if (this.listeBleu.length !== 0) {
                            let guerrier = this.listeBleu[0];
                            this.afficherBataille(this.listeRouge[i], guerrier);
                      
                            if (guerrier.estMort()) {
                                this.listeBleu.shift();
                                chBleu.listeGuerriers = chBleu.listeGuerriers.filter(g => g !== guerrier); // donner la liste finale en donnant tous les guerriers sauf le guerrier mort 
                            }
                            compte++;
                        }
                    }
                }
                compte = nbGuerriers;
            }
        }
    }
   // afficher a chaque bataille entre deux geurriers qui attaque qui et les PVs des deux 
    afficherBataille(guerrier1, guerrier2) {
        guerrier1.battre(guerrier2);
        // Ajouter l'affichage dans le HTML 
        console.log(guerrier1.getType() + " attaque " + guerrier2.getType());
        console.log(guerrier2.getType() + " PV : " + guerrier2.getPv());
        console.log(guerrier1.getType() + " PV : " + guerrier1.getPv() + "\n");
    }

    getNumeroDeLaCase() {
        return this.numeroDeLaCase;
    }

    getListeRouge() {
        return this.listeRouge;
    }

    getListeBleu() {
        return this.listeBleu;
    }

    setListeRouge(listeRouge) {
        this.listeRouge = listeRouge;
    }

    setListeBleu(listeBleu) {
        this.listeBleu = listeBleu;
    }

    setNumeroDeLaCase(numeroDeLaCase) {
        this.numeroDeLaCase = numeroDeLaCase;
    }
}
