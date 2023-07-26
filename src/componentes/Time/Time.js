import Card from '../Card'
import './Time.css'


export const Time = (props) => {

    const cssFundo = {backgroundColor: props.corSecundaria}
    

    return(
        (props.colaboradores.length > 0) ? <section style={cssFundo} className='time'>
            <h3 style={{borderColor: props.corPrimaria,  color: props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Card
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
}