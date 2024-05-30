
function handleImageGallery() {
 
    var images = [
        { src: 'images/elfe.png', name: 'Elf',Resource:'2' },
        { src: 'images/chefelfe.png', name: 'Chef Elf',Resource:'4' },
        { src: 'images/nain.png', name: 'Nain',Resource:'1' },
        { src: 'images/chefnain.png', name: 'Chef Nain' ,Resource:'3'},
        
    ];

    var currentIndex = 0;


    var imageElement = document.getElementById('image');
    var nameElement = document.getElementById('imageName');
    var ResElement = document.getElementById('ResName');
    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');

    function updateImage() {
        var currentImage = images[currentIndex];
        imageElement.src = currentImage.src;
        nameElement.textContent = currentImage.name;
        ResElement.textContent = 'Cost : '+currentImage.Resource;
   
    }

   
    updateImage();

   
    nextButton.addEventListener('click', function () {
      
        currentIndex = (currentIndex + 1) % images.length;

        updateImage();
    });

   
    prevButton.addEventListener('click', function () {
  
        currentIndex = (currentIndex - 1 + images.length) % images.length;

        updateImage();
    });
}


handleImageGallery();

