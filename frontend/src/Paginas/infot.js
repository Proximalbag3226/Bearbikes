import Principal from "../Componentes/Principal";
import Contenedor from "../Compmodif/Contenedor"

const Infot = () =>{
    return (
        <div>
            <div>
                <Principal/>
            </div>
            <h1 className={"titulo"}>Sitios turisticos</h1>
            <div>
                <Contenedor/>
            </div>
        </div>
    );
}

export default Infot