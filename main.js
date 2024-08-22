const hamburger = document.querySelector('.hamburger');
const integrantes = document.querySelector('.box-integrantes');

hamburger.addEventListener('click', () => {

    integrantes.classList.toggle('active');

});