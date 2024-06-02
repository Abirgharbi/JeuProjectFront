
class De {
    static lancerDe() {
        const value = 3; // puisque c'est un Dé de 3 faces 
        return Math.floor(Math.random() * value);
    }

    constructor() {
        this.resDe = this.lancerDe();
    }

    // lancer le de selon la force du guerriers 
    static lancerMultiples(nbLancer) {
        let somme = 0;
        while (nbLancer !== 0) {
            somme += this.lancerDe() + 1;
            nbLancer--;
        }
        return somme;
    }

    getResDe() {
        return this.resDe;
    }
}
