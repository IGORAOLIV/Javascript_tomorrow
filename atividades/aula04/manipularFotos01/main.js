const images = ['images/sol.webp', 'images/lua.jpg', 'images/sol.jpeg'];
let currentIndex = 0;
let intervalId;

const imageElement = document.getElementById('image');

function toggleImage() {
    imageElement.style.opacity = 0;
    setTimeout(() => {

        console.log(`CurrentIndex:  ${currentIndex}`);
        console.log(`Resto da divisão: ${(currentIndex + 1) % images.length}`);
        console.log(`----------`);
        currentIndex = (currentIndex + 1) % images.length;
        // length retorna tamanho do array
        // (currentIndex + 1) % images.length:
        // (0 + 1) % 3  ( 0 - 2)
        //  1 % 3 ? ==> 0  ==> currentIndex = 1
        //  2 % 3 ? ==> 1 ===> 2
        //  3 % 3 ? ==> 0 

        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1;
    }, 500);
}

function startInterval() {
    intervalId = setInterval(toggleImage, 2000);
}

function stopInterval() {
    clearInterval(intervalId);
}

function incSize() {
    imageElement.style.width = '500px';
    imageElement.style.height = '500px';
}
function normalSize() {
    imageElement.style.width = '200px';
    imageElement.style.height = '200px';
}


startInterval(); // Iniciar o intervalo automaticamente

imageElement.addEventListener('mouseenter', stopInterval);
imageElement.addEventListener('mouseleave', startInterval);
imageElement.addEventListener('click', incSize);
imageElement.addEventListener('dblclick', normalSize);
