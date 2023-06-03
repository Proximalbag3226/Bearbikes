import Tarjeta from '../../Componentes/Tarjeta';
import '../../CSS/Tarjetas.css'

function Infocomercios() {
    return(
        <div>
            <Tarjeta
                lugar='Ropa'
                imagen='comercio1'
                href={"/comercio1"}/>
            <Tarjeta
                lugar='Tlayuc'
                imagen='comercio2'
                href={"/comercio2"}/>
            <Tarjeta
                lugar='La palestina'
                imagen='comercio3'
                href={"/comercio3"}/>
        </div>
    )
}

export default Infocomercios
