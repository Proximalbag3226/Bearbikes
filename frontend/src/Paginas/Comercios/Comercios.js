import Principal from "../../Componentes/Principal";
import Infocomercios from "./Infocomercios";

const Comercios = () =>{
    return (
        <div>
            <div>
                <Principal/>
            </div>
            <h1 className={"titulo"}>Comercios Locales</h1>
            <div>
                <Infocomercios/>
            </div>
        </div>
    );
}

export default Comercios