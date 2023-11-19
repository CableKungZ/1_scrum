const catContainer = document.getElementById('catContainer');

// Array of cat images (replace with your own URLs)
const catImages = [
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg',
    'cat4.jpg',
    'cat5.jpg',
    // Add more cat images as needed
];

// Function to shuffle the cat images
function shuffleCats() {
    catImages.sort(() => Math.random() - 0.5);
    displayCats();
}

// Function to display the cat images
function displayCats() {
    catContainer.innerHTML = '';
    catImages.forEach((catImage) => {
        const catDiv = document.createElement('div');
        catDiv.classList.add('cat');
        const img = document.createElement('img');
        img.src = catImage;
        catDiv.appendChild(img);
        catContainer.appendChild(catDiv);
    });
}

// Initial display
displayCats();
