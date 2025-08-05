document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    logo.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
    logo.style.transform = "scale(0) rotate(0deg)"; // Start with a small, rotated logo
    logo.style.opacity = "0"; // Start with invisible logo

    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(360deg)"; // Rotate and scale to full size
        logo.style.opacity = "1"; // Fade in the logo
    }, 100); // Delay to allow the transition to be visible

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetId === "about-us" || targetId === "services") {
                window.scrollTo({
                    top: targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.clientHeight / 2), // Center the columns or gallery
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust this value to match the height of your fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeBtn = document.querySelector(".lightbox .close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImage.src = item.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage) {
            lightbox.classList.remove("active");
        }
    });

    // Slideshow functionality
    let currentIndex = 0;
    const images = Array.from(galleryItems);

    function showImage(index) {
        lightboxImage.src = images[index].src;
        lightbox.classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.addEventListener("keydown", (e) => {
        if (lightbox.classList.contains("active")) {
            if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                prevImage();
            } else if (e.key === "Escape") {
                lightbox.classList.remove("active");
            }
        }
    });

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage) {
            lightbox.classList.remove("active");
        }
    });

    // Redirect to pricing page on "CENNÍK" button click
    document.querySelectorAll("button").forEach(button => {
        if (button.textContent.trim() === "CENNÍK") {
            button.addEventListener("click", () => {
                window.location.href = "pricing.html";
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
