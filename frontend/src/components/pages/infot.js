import Menu from "../common/menu";
import Contenedor from "./places/Contenedor"

const Infot = () =>{
    return (
        <div>
            <div>
                <Menu/>
            </div>
            <h1 className={"titulo"}>Sitios turisticos</h1>
            <div>
                <Contenedor/>
            </div>
        </div>
    );
}

export default Infot