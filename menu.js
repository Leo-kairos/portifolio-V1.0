let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let btnFechar = document.getElementById('btn_fechar')
let overlay = document.getElementById('overlay')
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})
