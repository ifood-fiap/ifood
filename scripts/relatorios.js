function changeImage() {
    // Esconde todas as imagens
    document.querySelectorAll('.imagem-relatorio').forEach(img => img.style.display = 'none');
    
    // Pega o item ativo do carrossel
    const activeItem = document.querySelector('.carousel-item.active');
    
    // Obtém o ID da imagem correspondente
    const imgId = activeItem.getAttribute('data-img');
    
    // Exibe a imagem correspondente
    if (imgId) {
        const imgToShow = document.getElementById(imgId);
        if (imgToShow) {
            imgToShow.style.display = 'block';
        }
    }
}

// Adiciona o listener para detectar mudanças no carrossel
const carousel = document.getElementById('monthsCarousel');
carousel.addEventListener('slid.bs.carousel', changeImage);

// Garante que a imagem correta seja carregada ao iniciar
document.addEventListener('DOMContentLoaded', changeImage);