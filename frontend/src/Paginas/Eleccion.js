import Principal from "../Componentes/Principal";

const Eleccion = () => {
    return(
        <div>
            <div>
                <Principal/>
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