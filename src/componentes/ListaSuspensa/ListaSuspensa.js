import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} valor={props.valor}  required>
                <option></option>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}