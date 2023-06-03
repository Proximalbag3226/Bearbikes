import Tarjeta from '../../Componentes/Tarjeta';
import '../../CSS/Tarjetas.css'

function Talleresinfo() {
    return(
        <div>
            <Tarjeta
                lugar='Taller "Bici Fine"'
                imagen='taller1'
                href={"/taller1"}/>
            <Tarjeta
                lugar='Taller "Don Juan"'
                imagen='taller2'
                href={"/taller2"}/>
            <Tarjeta
                lugar='Taller "Mi princesa"'
                imagen='taller3'
                href={"/taller3"}/>
            <Tarjeta
                lugar='Taller "Brinspice"'
                imagen='taller4'
                href={"/taller4"}/>
        </div>
    )
}

export default Talleresinfo
