import "./campo-Texto.css"


const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulof}</label>
        <input placeholder={placeholderModificado}></input>
    </div>
}

export default CampoTexto