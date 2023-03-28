import Menu from "../common/menu";
import Contenedorb from "./info/Contenedorb";

const Infob = () =>{
    return (
        <div>
            <div>
                <Menu/>
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