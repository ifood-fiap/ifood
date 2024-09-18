document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('monthsCarousel');
    const imageElements = document.querySelectorAll('.imagem-relatorio');

    function updateImage() {
        const activeItem = carouselElement.querySelector('.carousel-item.active');
        const imgId = activeItem.getAttribute('data-img');
        const imgToShow = document.getElementById(imgId);
        imageElements.forEach(img => img.classList.add('d-none'));
        
        if (imgToShow) {
            imgToShow.classList.remove('d-none');
        }
    }
    carouselElement.addEventListener('slid.bs.carousel', updateImage);

    updateImage();
});