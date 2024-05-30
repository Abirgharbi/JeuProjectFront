var chateau=null;
var NextTourBtn = document.getElementById('NextTour');
var lancer = document.getElementById("LancerPartie");


const selectDivSection = document.getElementById('selectDiv');
const trainBtn = document.getElementById('trainBtn');
const trainBleuButton = document.getElementById('trainBleu');
const trainRougeButton = document.getElementById('trainRed');
const waitListBtnB=document.getElementById('BattenteListe');
const waitListBtnR=document.getElementById('RattenteListe');
const piste=document.getElementById('piste');
const audio = document.getElementById('musicoff');
const volume = document.getElementById('background-music');

var sideSelected;
var partie = new Partie();

lancer.addEventListener("click",()=>{
    partie.lancerPartie();
    NextTourBtn.style.display="block";
    lancer.style.display="none"
});

NextTourBtn.addEventListener('click',()=>{  partie.nouveauTour();})


audio.addEventListener('click', () => {
  if (volume.paused) {
      volume.play();
      document.getElementById('musicoff').src = './images/volume_727269 (1).png';
  } else {
      volume.pause();
      document.getElementById('musicoff').src = './images/mute_727240.png'; 
  }
});

trainBleuButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected= 'Bleu';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected= '';    
    }
});


trainRougeButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected= 'Rouge';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected= '';
        
    }
});


trainBtn.addEventListener('click',()=> {
  var warrior = document.getElementById("imageName").textContent;
    if(sideSelected === 'Rouge'){
      chateau = partie.getChateauRouge();    
        listR = chateau.listeDattente;
    }else{
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
waitListBtnB.addEventListener('click',()=> {
    chateau = partie.getChateauBleu();    
    listB = chateau.listeDattente;
    console.log(listB);
  
  }); 

waitListBtnR.addEventListener('click',()=> {
    chateau = partie.getChateauRouge();    
    listR = chateau.listeDattente;
    console.log(listR);
  
  }); 








