import "./formulario.css";
import CampoTexto from "../campo-Texto/campo-Texto";
import ListaOpciones from "../listaOpciones/listaOpciones";

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>
            Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa tu nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo="Foto"placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
</section>
}

export default Formulario