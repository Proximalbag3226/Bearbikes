import Principal from "../../Componentes/Principal";

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
                <a href="/adminform">Administrador</a>
                <br/><br/>
                <a href="/dueñoTallerForm">Dueño de taller</a>
                <br/><br/>
                <a href="/dueñoComercioForm">Dueño de comercio</a>
            </div>
        </div>
    );
}

export default Eleccion;