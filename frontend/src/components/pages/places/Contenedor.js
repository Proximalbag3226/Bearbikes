import Tarjeta from "./Tarjeta";

function Contenedor() {
    return(
        <div className="contenedor-tarjetas">
            <Tarjeta
                lugar='Zocalo'
                imagen='zocalo'
                href={"/zocalo"}/>
            <Tarjeta
                lugar='Bellas Artes'
                imagen='bellas_artes'
                href={"/bellasartes"}/>
            <Tarjeta
                lugar='Torre Latinoamericana'
                imagen='torre'
                href={"/torre"}/>
            <Tarjeta
                lugar='Xochimilco'
                imagen='xochimilco'
                href={"/xochimilco"}/>
            <Tarjeta
                lugar='Reforma'
                imagen='reforma'
                href={"/reforma"}/>
            <Tarjeta
                lugar='Polanco'
                imagen='polanco'
                href={"/polanco"}/>
            <Tarjeta
                lugar='Basilica'
                imagen='basilica'
                href={"/basilica"}/>
            <Tarjeta
                lugar='Chapultepec'
                imagen='chapultepec'
                href={"/chapultepec"}/>
        </div>
    )
}

export default Contenedor
