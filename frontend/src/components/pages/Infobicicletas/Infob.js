<<<<<<<< HEAD:frontend/src/components/pages/Infobicicletas/Infob.js
import Principal from "../../Componentes/Principal";
import Contenedorb from "../../Modificados/Contenedorb";
========
import Menu from "../common/menu";
import Contenedorb from "./info/Contenedorb";
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/Infob.js

const Infob = () =>{
    return (
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Infobicicletas/Infob.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/Infob.js
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