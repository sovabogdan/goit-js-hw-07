import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMurkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMurkup);
galleryEl.addEventListener('click', onOpenLargeImg);

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
};

function onOpenLargeImg(e) {
    const isImgEl = e.target.classList.contains('gallery__image');

    if (!isImgEl) {
        return;
    }
    e.preventDefault();

    const largeImgLink = e.target.dataset.source;

	const instance = basicLightbox.create(`
    
        <img src = "${largeImgLink}" alt= "${e.target.alt}">
    
`, {
		onShow: (instance) => addEventListener('onShow', instance),
		onClose: (instance) => removeEventListener('onClose', instance)
	})
instance.show()
    
}


