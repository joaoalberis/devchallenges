const hamburguer = document.querySelector('.hamburguer')
const menuBar = document.querySelector('.nav')

hamburguer.addEventListener('click', () => {
    menuBar.classList.toggle('open')
    hamburguer.classList.toggle('open')
})