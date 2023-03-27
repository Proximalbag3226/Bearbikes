import {Tarjeta} from "../Componentes/Tarjeta";
import '../CSS/Tarjetas.css'

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
