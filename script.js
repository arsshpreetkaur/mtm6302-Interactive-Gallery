const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const caption = document.getElementById('caption');
const thumbnails = document.getElementById('thumbnails');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const images = [
    { src: 'images1.jpg', hdSrc: 'hd/images1.jpg', caption: 'First Image' },
    { src: 'images2.jpg', hdSrc: 'hd/images2.jpg', caption: 'Second Image' },
    { src: 'images3.jpg', hdSrc: 'hd/images3.jpg', caption: 'Third Image' },
    { src: 'images4.jpg', hdSrc: 'hd/images4.jpg', caption: 'Fourth Image' },
    { src: 'images5.jpg', hdSrc: 'hd/images5.jpg', caption: 'Fifth Image' },
    { src: 'images6.jpg', hdSrc: 'hd/images6.jpg', caption: 'Sixth Image' },
    { src: 'images7.jpg', hdSrc: 'hd/images7.jpg', caption: 'Seventh Image' },
    { src: 'images8.jpg', hdSrc: 'hd/images8.jpg', caption: 'Eighth Image' },
    { src: 'images9.jpg', hdSrc: 'hd/images9.jpg', caption: 'Ninth Image' },
    { src: 'images10.jpg', hdSrc: 'hd/images10.jpg', caption: 'Tenth Image' },
    { src: 'images11.jpg', hdSrc: 'hd/images11.jpg', caption: 'Eleventh Image' },
    { src: 'images12.jpg', hdSrc: 'hd/images12.jpg', caption: 'Twelfth Image' },
    { src: 'images13.jpg', hdSrc: 'hd/images13.jpg', caption: 'Thirteenth Image' },
    { src: 'images14.jpg', hdSrc: 'hd/images14.jpg', caption: 'Fourteenth Image' },
    { src: 'images15.jpg', hdSrc: 'hd/images15.jpg', caption: 'Fifteenth Image' },
    { src: 'images16.jpg', hdSrc: 'hd/images16.jpg', caption: 'Sixteenth Image' },
    { src: 'images17.jpg', hdSrc: 'hd/images17.jpg', caption: 'Seventeenth Image' },
    { src: 'images18.jpg', hdSrc: 'hd/images18.jpg', caption: 'Eighteenth Image' },
    { src: 'images19.jpg', hdSrc: 'hd/images19.jpg', caption: 'Nineteenth Image' },
    { src: 'images20.jpg', hdSrc: 'hd/images20.jpg', caption: 'Twentieth Image' }
    // Add more images here
];

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    const { src, caption: imageCaption } = images[index];
    lightboxImage.src = src;
    caption.textContent = imageCaption;
    thumbnails.innerHTML = images.map((image, i) => 
        `<img src="${image.src}" class="${i === index ? 'active' : ''}" data-index="${i}">`
    ).join('');
    lightbox.classList.add('show');
}

gallery.innerHTML = images.map((image, i) =>
    `<div class="frame" data-index="${i}"><img src="${image.src}" alt="${image.caption}"></div>`
).join('');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const frame = e.target.closest('.frame');
        if (frame) {
            showImage(Number(frame.dataset.index));
        }
    }
});

close.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

prev.addEventListener('click', () => {
    showImage((currentIndex - 1 + images.length) % images.length);
});

next.addEventListener('click', () => {
    showImage((currentIndex + 1) % images.length);
});

thumbnails.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        showImage(Number(e.target.dataset.index));
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('show')) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('show');
        } else if (e.key === 'ArrowLeft') {
            showImage((currentIndex - 1 + images.length) % images.length);
        } else if (e.key === 'ArrowRight') {
            showImage((currentIndex + 1) % images.length);
        }
    }
});

lightboxImage.addEventListener('click', () => {
    lightboxImage.classList.toggle('zoom');
});


