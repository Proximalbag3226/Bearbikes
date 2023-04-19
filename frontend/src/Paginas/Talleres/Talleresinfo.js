import Tarjeta from '../../Componentes/Tarjeta';
import '../../CSS/Tarjetas.css'

function Talleresinfo() {
    return(
        <div>
            <Tarjeta
                lugar='Taller "El chino"'
                imagen='taller1'
                href={"/taller1"}/>
            <Tarjeta
                lugar='Taller "Don Juan"'
                imagen='taller2'
                href={"/taller2"}/>
            <Tarjeta
                lugar='Taller "El oriental"'
                imagen='taller3'
                href={"/taller3"}/>
            <Tarjeta
                lugar='Taller "zy"'
                imagen='taller4'
                href={"/taller4"}/>
        </div>
    )
}

export default Talleresinfo
