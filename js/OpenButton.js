window.onload = function() {

    //Lorem Menu
    
    const Button = document.getElementById('ButtonJs')
    const Button2 = document.getElementById('ButtonJs2')
    const Button3 = document.getElementById('ButtonJs3')
    const HeaderBlock = document.getElementById('HeaderBlockJs')
    const Sobre = document.getElementById('SobreJs')
    const Title = document.getElementById('ExplicandoJs')
    const Description = document.getElementById('TextoJs')

    Button.addEventListener('click', () => {
        Title.innerHTML = "Example 1"
        Description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis asperiores repudiandae ad, quas ratione quaerat voluptates nam veniam. Labore nemo architecto omnis, totam dolor sequi non perspiciatis facere hic tempora. Dolorem optio ut magni fuga eaque illum quasi tempora."
        HeaderBlock.classList.add('header-block-open')
        Menu.classList.remove('Menu-Hamburger-Open')
    })

    Button2.addEventListener('click', () => {
        Title.innerHTML = "Example 2"
        Description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, debitis nemo nulla commodi mollitia officiis amet repellendus aut reiciendis soluta laboriosam quasi nisi sed incidunt ab illo quod praesentium! Nisi!"
        HeaderBlock.classList.add('header-block-open')
        Menu.classList.remove('Menu-Hamburger-Open')
    })

    Button3.addEventListener('click', () => {
        Title.innerHTML = "Example 3"
        Description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere qui odit animi tempora sint similique, non vero laboriosam sunt labore saepe atque quos totam minima nam, optio dicta! Nihil, reiciendis. Ad accusantium sint non culpa illum deleniti labore eveniet."
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
