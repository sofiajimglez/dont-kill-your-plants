const popup = document.getElementById('popup');

const selectedImage = document.getElementById('selected-img');

const imageIndexes = document.querySelectorAll('.gallery-img');

imageIndexes.forEach((img) => {
    img.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = img.src;
        selectedImage.alt = img.alt;
    })
});

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    popup.src = '';
    popup.alt = '';
})

