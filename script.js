const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const destino = document.getElementById(proximoPasso);

        if (destino) {
            atual.classList.remove('ativo');
            destino.classList.add('ativo');
        } else {
            console.warn(`Elemento com ID "${proximoPasso}" não encontrado.`);
        }
    });
});


