document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        // Oculta todas as imagens
        document.getElementById('img-manha').classList.add('d-none');
        document.getElementById('img-tarde').classList.add('d-none');
        document.getElementById('img-noite').classList.add('d-none');
        
        // Mostra a imagem correspondente
        const selectedImg = this.getAttribute('data-img');
        document.getElementById(`img-${selectedImg}`).classList.remove('d-none');
    });
});