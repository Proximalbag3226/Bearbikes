<<<<<<<< HEAD:frontend/src/Modificados/Contenedorb.js
import {Tarjeta} from "../Componentes/Tarjeta";
import '../CSS/Tarjetas.css'
========
import {Tarjeta} from "../places/Tarjeta";
import '../../../assets/css/Tarjetas.css'
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/info/Contenedorb.js

function Contenedorb() {
    return(
        <div>
            <Tarjeta
                lugar='¿Tu cuadro de bici es original?'
                imagen='casco'
                href={"/cuadro"}/>
            <Tarjeta
                lugar='Baterias Phylion'
                imagen='bici'
                href={"/bateria"}/>
            <Tarjeta
                lugar='Equipamiento obligatorio'
                imagen='equipo'
                href={"equipo"}/>
            <Tarjeta
                lugar='Viabilidad de los sistemas de bicicletas'
                imagen='rojo'
                href={"/viabilidad"}/>
        </div>
    )
}

export default Contenedorb
