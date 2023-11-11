const hamburgerbutton = document.getElementById('hamburger')
const navlist =document.getElementById('navlist')

function togglebutton(){
    navlist.classList.toggle('show')
}

hamburgerbutton.addEventListener('click', togglebutton)