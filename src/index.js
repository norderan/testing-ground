import "./style.css";



// Dropdown menu
const html = {
    dropdownButton: document.getElementById("dropdown-button"),
    dropdownMenu: document.getElementById("dropdown-div"),
}
html.dropdownMenu.classList.toggle("not-visible");

html.dropdownButton.addEventListener("click", () => {
    html.dropdownMenu.classList.toggle("not-visible");
});


// Image carusela

const caruselaModule = (() => {
    
    const images = [
        document.getElementById("div-image-1"),
        document.getElementById("div-image-2"),
        document.getElementById("div-image-3"),
        document.getElementById("div-image-4"),
    ]

    const caruselaButtonLeft = document.getElementById("carusela-button-left");
    const caruselaButtonRight = document.getElementById("carusela-button-right");

    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.toggle("not-visible", i !== index);
        });
    }

    function advanceImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function retreatImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    caruselaButtonLeft.addEventListener("click", retreatImage);
    caruselaButtonRight.addEventListener("click", advanceImage);

    return { advanceImage, retreatImage };
})();



setInterval(() => {
    caruselaModule.advanceImage();
}, 5000);