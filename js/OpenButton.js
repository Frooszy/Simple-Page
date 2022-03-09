window.onload = function() {

    //Lorem Menu
    
    const Button = document.getElementById('ButtonJs')
    const HeaderBlock = document.getElementById('HeaderBlockJs')
    const Sobre = document.getElementById('SobreJs')

    Button.addEventListener('click', () => {
        HeaderBlock.classList.add('header-block-open')
        Menu.classList.remove('Menu-Hamburger-Open')
    })

    Sobre.addEventListener('click', () => {
        HeaderBlock.classList.remove('header-block-open')
    })

    //Hamburger Menu

    const Hamburger = document.getElementById('ImagemJs')
    const Menu = document.getElementById('MenuHamburgerJs')

    Hamburger.addEventListener('click', () => {
        Menu.classList.toggle('Menu-Hamburger-Open')
    })
    

}
