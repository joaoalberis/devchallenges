const hamburguer = document.querySelector('.hamburguer')
const menuBar = document.querySelector('.bar')
const main = document.querySelector('main')
const h1 = document.querySelector('header h1')

hamburguer.addEventListener('click', () => {
    menuBar.classList.toggle('open')
    main.classList.toggle('open')
    h1.classList.toggle('open')
})