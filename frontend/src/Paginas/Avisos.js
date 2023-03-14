import Principal from "../Componentes/Principal";
import Aviso from "../Componentes/Aviso";

const Avisos = () => {
    return(
        <div>
            <Principal/>
            <div>
                <Aviso
                titulo="Aviso"
                texto="Hola, buenas"
                />
            </div>
        </div>
    );
}

export default Avisos