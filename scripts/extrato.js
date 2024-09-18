let saldoVisivel = true;

function toggleSaldo() {
    const saldoElement = document.getElementById('saldo');
    const iconeOlho = document.getElementById('icone-olho');
    
    if (saldoVisivel) {
        saldoElement.innerHTML = 'R$-------';
        iconeOlho.src = '../assets/icons/olho-fechado-icon.svg';
        iconeOlho.alt = 'Olho fechado';
    } else {
        saldoElement.innerHTML = 'R$ 1249,68';
        iconeOlho.src = '../assets/icons/olho-aberto-icon.svg';
        iconeOlho.alt = 'Olho aberto';
    }

    saldoVisivel = !saldoVisivel;
}