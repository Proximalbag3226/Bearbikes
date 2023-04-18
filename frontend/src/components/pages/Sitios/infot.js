<<<<<<<< HEAD:frontend/src/components/pages/Sitios/infot.js
import Principal from "../../Componentes/Principal";
import Contenedor from "../../Modificados/Contenedor"
========
import Menu from "../common/menu";
import Contenedor from "./places/Contenedor"
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/infot.js

const Infot = () =>{
    return (
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/infot.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/infot.js
            </div>
            <h1 className={"titulo"}>Sitios turisticos</h1>
            <div>
                <Contenedor/>
            </div>
        </div>
    );
}

export default Infot