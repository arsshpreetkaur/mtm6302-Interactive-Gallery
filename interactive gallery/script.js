document.addEventListener("DOMContentLoaded", function() {
    const catImages = [
        { src: 'images1.jpg', hdSrc: 'hd/images1.jpg', caption: 'First Image' },
        { src: 'images2.jpg', hdSrc: 'images2.jpg', caption: 'Second Image' },
        { src: 'images3.jpg', hdSrc: 'images3.jpg', caption: 'Third Image' },
        { src: 'images4.jpg', hdSrc: 'images4.jpg', caption: 'Fourth Image' },
        { src: 'images5.jpg', hdSrc: 'images5.jpg', caption: 'Fifth Image' },
        { src: 'images6.jpg', hdSrc: 'images6.jpg', caption: 'Sixth Image' },
        { src: 'images7.jpg', hdSrc: 'images7.jpg', caption: 'Seventh Image' },
        { src: 'images8.jpg', hdSrc: 'images8.jpg', caption: 'Eighth Image' },
        { src: 'images9.jpg', hdSrc: 'images9.jpg', caption: 'Ninth Image' },
        { src: 'images10.jpg', hdSrc: 'images10.jpg', caption: 'Tenth Image' },
        { src: 'images11.jpg', hdSrc: 'images11.jpg', caption: 'Eleventh Image' },
        { src: 'images12.jpg', hdSrc: 'images12.jpg', caption: 'Twelfth Image' },
        { src: 'images13.jpg', hdSrc: 'images13.jpg', caption: 'Thirteenth Image' },
        { src: 'images14.jpg', hdSrc: 'images14.jpg', caption: 'Fourteenth Image' },
        { src: 'images15.jpg', hdSrc: 'images15.jpg', caption: 'Fifteenth Image' },
        { src: 'images16.jpg', hdSrc: 'images16.jpg', caption: 'Sixteenth Image' },
        { src: 'images17.jpg', hdSrc: 'images17.jpg', caption: 'Seventeenth Image' },
        { src: 'images18.jpg', hdSrc: 'images18.jpg', caption: 'Eighteenth Image' },
        { src: 'images19.jpg', hdSrc: 'images19.jpg', caption: 'Nineteenth Image' },
        { src: 'images20.jpg', hdSrc: 'images20.jpg', caption: 'Twentieth Image' }
    ];

    const galleryElement = document.getElementById("gallery");

    function createGalleryItem(image) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = "Cat";
        galleryItem.appendChild(img);

        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.textContent = image.caption;
        galleryItem.appendChild(caption);

        galleryItem.addEventListener("click", function() {
            openLightbox(image);
        });

        return galleryItem;
    }

    function openLightbox(image) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightboxImage");
        lightboxImg.src = image.hdSrc;
        lightbox.style.display = "block";
    }

    const closeSpan = document.querySelector(".close");
    closeSpan.addEventListener("click", function() {
        const lightbox = document.getElementById("lightbox");
        lightbox.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        const lightbox = document.getElementById("lightbox");
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    catImages.forEach(function(cat) {
        const galleryItem = createGalleryItem(cat);
        galleryElement.appendChild(galleryItem);
    });
});
