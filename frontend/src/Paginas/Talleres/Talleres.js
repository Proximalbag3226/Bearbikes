import Principal from "../../Componentes/Principal";
import Talleresinfo from "./Talleresinfo";

const Infotalleres = () =>{
    return (
        <div>
            <div>
                <Principal/>
            </div>
            <h1 className={"titulo"}>Talleres de bicicletas</h1>
            <div>
                <Talleresinfo/>
            </div>
        </div>
    );
}

export default Infotalleres