document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const images = document.querySelectorAll(".gallery-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.transform = "scale(1.3)";
            } else {
                image.style.transform = "scale(1)";
            }
        });
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });
});
