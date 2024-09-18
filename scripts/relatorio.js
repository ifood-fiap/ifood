document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        document.getElementById('img-manha').classList.add('d-none');
        document.getElementById('img-tarde').classList.add('d-none');
        document.getElementById('img-noite').classList.add('d-none');
        
        const selectedImg = this.getAttribute('data-img');
        document.getElementById(`img-${selectedImg}`).classList.remove('d-none');
    });
});