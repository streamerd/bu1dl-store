if( !window.fmbs ) {
    window.fmbs = {};
}

window.fmbs.galleryMarkup = `<div class="fmbs-gallery-grid-item">
        <img class="fmbs-gallery-grid-item__img" src="http://ipfs.io/ipfs/QmdLUGQdXr5npDKaY5ju4Eu2Z5XbZhk1oBC5v7SNsDGZAy/nft.png"/>
        <h4 class="fmbs-gallery-grid-item__text">Edition #001  100thousand  KirbLaGoop Plush</h4>
        <p class="fmbs-gallery-grid-item__description">EDITION 001 of 100 Physical 100 Thousand Kirblagoop Plush <br>100 Thousand Plush Collaboration Flexicoworldwide Marcy Mane and Kirblagoop 100 Thousand. Plush Created based off design by Aidan Capristo. <br><br>Physical Plush 12 Inch<br>with MP3 Playable Sounds</p>
        <a class="fmbs-gallery-grid-item__more-link" href="javascript://">[more about the item]</a>
    </div>`;

function initGallery() {
    const galleryContainer = document.querySelector( '.fmbs-gallery-grid' );
    
    if( galleryContainer ) {
        let galleryContents = '';

        for( let i = 0; i < 9; i++ ) {
            galleryContents += window.fmbs.galleryMarkup;
        }

        galleryContainer.classList.remove( 'fmbs-gallery--loading' );

        galleryContainer.innerHTML = galleryContents;
    }
}

initGallery();