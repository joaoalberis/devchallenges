const hamburguer = document.querySelector('.hamburguer')
const menuBar = document.querySelector('.bar')

hamburguer.addEventListener('click', () => {
    menuBar.classList.toggle('open')
    hamburguer.classList.toggle('open')
})