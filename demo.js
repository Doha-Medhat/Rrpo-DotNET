let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

// Get the buttons
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// Add event listeners to the buttons
prevBtn.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
});

nextBtn.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showSlides();
});