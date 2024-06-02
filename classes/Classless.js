
// class 
var chateau = null;
var NextTourBtn = document.getElementById('NextTour');
var lancer = document.getElementById("LancerPartie");


const selectDivSection = document.getElementById('selectDiv');
const trainBtn = document.getElementById('trainBtn');
const trainBleuButton = document.getElementById('trainBleu');
const trainRougeButton = document.getElementById('trainRed');
const waitListBtnB = document.getElementById('BattenteListe');
const waitListBtnR = document.getElementById('RattenteListe');
const piste = document.getElementById('piste');
const audio = document.getElementById('musicoff');
const volume = document.getElementById('background-music');
const LancerP = document.getElementById('LancerP');
const msg = document.getElementById("msgGagner");



var sideSelected;
var partie = new Partie();

// lancer le jeu ( les boutons de lancement et les element d'entrainement )
LancerP.addEventListener("click", () => {
 
    NextTourBtn.style.display = "none";
    lancer.style.display = "inline";
    LancerP.style.display = "none";
    waitListBtnB.style.display = "inline";
    waitListBtnR.style.display = "inline";
    trainRougeButton.style.display = "inline";
    trainBleuButton.style.display = "inline"

});


// lancer la partie 
lancer.addEventListener("click", () => { partie.lancerPartie(); })

// lancer a chaque fois le tour suivant 
NextTourBtn.addEventListener('click', () => { partie.nouveauTour(); })

// activer l'audio
audio.addEventListener('click', () => {
    if (volume.paused) {
        volume.play();
        document.getElementById('musicoff').src = './images/volume.png';
    } else {
        volume.pause();
        document.getElementById('musicoff').src = './images/mute.png';
    }
});

// desactiver l'audio
trainBleuButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected = 'Bleu';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected = '';
    }
});

// designer le chateau à entrainer ses guerriers 
trainRougeButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected = 'Rouge';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected = '';

    }
});

// Appel de fonction d'entrainement 
trainBtn.addEventListener('click', () => {
    var warrior = document.getElementById("imageName").textContent;
    if (sideSelected === 'Rouge') {
        chateau = partie.getChateauRouge();
        listR = chateau.listeDattente;
    } else {
        chateau = partie.getChateauBleu();
        listB = chateau.listeDattente;
    }
    switch (warrior) {
        case "Nain":
            chateau.creerUnNain();
            break;
        case "Elf":
            chateau.creerUnElfe();
            break;
        case "Chef Nain":
            chateau.creerChefNain();
            break;
        case "Chef Elf":
            chateau.creerChefElfe();
            break;
        default:
            break;
    }


});
// Afficher la liste d'attente de chateau bleu
waitListBtnB.addEventListener('mouseover', () => {
    const chateau = partie.getChateauBleu();
    const listB = chateau.listeDattente;
    console.log(listB);
    if(listB.length == 0){
        alert("Vous n'avez pas entrainé votre guerriers !");
    }
    else{
    const infoBox = document.getElementById('infoBoxB');
    const li =document.createElement('li');
    let content = '';
    listB.forEach(guerrier => {
        const imgSrc = guerrier.getImageSrc();
        content += `<li style="display: inline-block; "><img src="${imgSrc}" style="width: 50px; height: 50px; object-fit: contain; margin: 5px;"> <p style="color:white;text-align: center;">${guerrier.getType()}</p></li>`;
    });

    infoBox.innerHTML=content;
    infoBox.style.display = 'inline-block';
}
});
waitListBtnB.addEventListener('mouseout', () => {
    infoBoxB.style.display = 'none';
  
});

// Afficher la liste d'attente de chateau rouge 
waitListBtnR.addEventListener('mouseover', () => {
    chateau = partie.getChateauRouge();
    listR = chateau.listeDattente;
    console.log(listR);
    if(listR.length == 0){
        alert("Vous n'avez pas entrainé votre guerriers !");
    }
    else{
    const infoBox = document.getElementById('infoBoxR');
    const li =document.createElement('li');
    let content = '';
    listR.forEach(guerrier => {
        const imgSrc = guerrier.getImageSrc();
        content += `<li style="display: inline-block; "><img src="${imgSrc}" style="width: 50px; height: 50px; object-fit: contain; margin: 5px;"> <p style="color:white;text-align: center;">${guerrier.getType()}</p></li>`;
    });

    infoBox.innerHTML=content;
    infoBox.style.display = 'inline-block';
}

});
waitListBtnR.addEventListener('mouseout', () => {
    infoBoxR.style.display = 'none';
  
});











