import './Card.css'

export const Card = ({nome, cargo, imagem, corFundo}) => {
    return(
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}