
class De {
    static lancerDe() {
        const value = 3;
        return Math.floor(Math.random() * value);
    }

    constructor() {
        this.resDe = this.lancerDe();
    }

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
