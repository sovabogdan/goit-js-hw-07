import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMurkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMurkup);
galleryEl.addEventListener('click', onOpenSlider);

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};

function onOpenSlider(e) {
    const isImgEl = e.target.classList.contains('gallery__image');

    if (!isImgEl) {
        return;
    }
    e.preventDefault();

    e.target.setAttribute('title', e.target.alt)

    var lightbox = new SimpleLightbox('.gallery a', {});
}