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
                <a href="/ciclistasform">Ciclista</a>
                <br/><br/>
                <a href="">Administrador</a>
                <br/><br/>
                <a href="">Dueño de taller</a>
            </div>
        </div>
    );
}

export default Eleccion;