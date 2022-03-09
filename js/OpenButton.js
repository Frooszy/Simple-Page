window.onload = function() {
    
    const Button = document.getElementById('ButtonJs')
    const HeaderBlock = document.getElementById('HeaderBlockJs')
    const Sobre = document.getElementById('SobreJs')

    Button.addEventListener('click', () => {
        HeaderBlock.classList.add('header-block-open')
        Button.classList.add('caixa-close')
    })

    Sobre.addEventListener('click', () => {
        HeaderBlock.classList.remove('header-block-open')
        Button.classList.remove('caixa-close')
    } )

    
}
