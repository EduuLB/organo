import './Rodape.css'

const Rodape = () => {

    return(
        <footer className='rodape'>
            <div>
                <a href="https://facebook.com" target='_blank'>
                    <img src='/imagens/fb.png' alt='Logo Facebook'></img>
                </a>
                <a href="https://twitter.com" target='_blank'>
                    <img src='/imagens/tw.png' alt='Logo Twitter'></img>
                </a>
                <a href="https://instagram.com" target='_blank'>
                    <img src='/imagens/ig.png' alt='Logo Instagram'>
                </img></a>
            </div>
            <img src='imagens/logo.png' alt='Logo Organo'></img>
            <p>Desenvolvido por Eduardo Leop</p>
        </footer>
    )

}

export default Rodape