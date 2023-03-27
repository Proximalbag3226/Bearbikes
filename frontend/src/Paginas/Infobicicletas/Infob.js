import Principal from "../../Componentes/Principal";
import Contenedorb from "../../Modificados/Contenedorb";

const Infob = () =>{
    return (
        <div>
            <div>
                <Principal/>
            </div>
            <h1 className={"titulo"}>Informacion de bicicletas</h1>
            <br/><br/>
            <div>
                <Contenedorb/>
            </div>
        </div>
    );
}

export default Infob