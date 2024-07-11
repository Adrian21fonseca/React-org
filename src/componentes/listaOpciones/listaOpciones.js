import "./listaOpciones.css"

//Metodo map -> arreglo.mao { (equipo, index) =>
//  return <opcion></opcion>
//})
const ListaOpciones = () => {

    const equipos =[
        "",
        "programacion",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipos, index) => {
                return <option key={index}>{equipos}</option>
            }) }
        </select>
    </div>
}

export default ListaOpciones