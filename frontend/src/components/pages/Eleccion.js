import Menu from "../common/menu";

const Eleccion = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div className={"eleccion"}>
                <p className={"titulo"}>ELIGE TU TIPO DE USUARIO</p>
                <br/><br/>
                <a href="/registroCiclista">Ciclista</a>
                <br/><br/>
                <a href="/registroAdmin">Administrador</a>
                <br/><br/>
                <a href="/registroDueñoTaller">Dueño de taller</a>
                <br/><br/>
                <a href="/registroDueñoComercio">Dueño de Comercio</a>
            </div>
        </div>
    );
}

export default Eleccion;