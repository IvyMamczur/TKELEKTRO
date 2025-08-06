document.addEventListener("DOMContentLoaded", () => {
    // Animácia loga
    const logo = document.querySelector(".logo");
    logo.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
    logo.style.transform = "scale(0) rotate(0deg)";
    logo.style.opacity = "0";

    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(360deg)";
        logo.style.opacity = "1";
    }, 100);

    // Smooth scroll pre navigačné odkazy
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetId === "about-us" || targetId === "services") {
                window.scrollTo({
                    top: targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.clientHeight / 2),
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu funkcionalita
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isActive = hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isActive);
        });

        // Zatvorenie menu po kliknutí na odkaz
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        // Zavrie menu klávesou ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("active")) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Galéria a lightbox
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeBtn = document.querySelector(".lightbox .close");

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
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

    // Presmerovanie na cenník
    document.querySelectorAll("button").forEach(button => {
        if (button.textContent.trim() === "CENNÍK") {
            button.addEventListener("click", () => {
                window.location.href = "pricing.html";
            });
        }
    });
});
