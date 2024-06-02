
const VAL_FORCE = 10;
const VAL_COUT = 1;
const VAL_ARMURE = 1; // constante pour désigner les degats à eviter dans chaque attaque pour chaque guerrier 
const VAL_DEGAT = 1;
const VAL_PV = 100;
class Guerrier {
    
    constructor() {
        this.type = "Guerrier";
        this.force = VAL_FORCE;
        this.cout = VAL_COUT;
        this.armure = VAL_ARMURE;
        this.degat = VAL_DEGAT;
        this.pv = VAL_PV;
    }

    // fonction de bataille entre deux guerriers 
    battre(guerrier) {
        let somme = De.lancerMultiples(this.force);
        console.log("Degat : " + somme);
        guerrier.degatsReçus(somme);
    }

    degatsReçus(nbDegat) {
        this.pv -= Math.floor(nbDegat / this.armure);
    }

    estMort() {
        return this.pv <= 0;
    }

    getArmure() {
        return this.armure;
    }

    getDegat() {
        return this.degat;
    }

    getType() {
        return this.type;
    }

    getForce() {
        return this.force;
    }

    getCout() {
        return this.cout;
    }

    getPv() {
        return this.pv;
    }

    setPv(pv) {
        this.pv = pv;
    }

    setType(type) {
        this.type = type;
    }

    setForce(force) {
        this.force = force;
    }

    setCout(cout) {
        this.cout = cout;
    }

    setDegat(degat) {
        this.degat = degat;
    }

    setArmure(armure) {
        this.armure = armure;
    }
  // afficher infos guerrier 
    afficheInfosGuerriers() {
        return `
        <ul>
          <li>Type : ${this.type}</li>
          <li>PV : ${this.pv}</li>
          <li>Armure : ${this.armure}</li>
          <li>Force : ${this.force} (Force multiplié par dégât : ${this.degat})</li>
          <li>Coût unité : ${this.cout}</li>
        </ul>
      `;
        
    }
    getImageSrc() {
        switch (this.type) {
            case 'Elfe':
                return './images/elfe.png';
            case 'Chef Elfe':
                return './images/chefelfe.png';
            case 'Nain':
                return './images/nain.png';
            case 'Chef Nain':
                return './images/chefnain.png';
            default:
                return '';
        }
    }
}
