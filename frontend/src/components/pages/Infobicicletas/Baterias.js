<<<<<<<< HEAD:frontend/src/components/pages/Infobicicletas/Baterias.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../common/menu";
import Infos from "../Componentes/Infos"
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/Baterias.js

const Bateria = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <Infos
                    lugar={"Baterias phylon"}
                    text={"Phylion es uno de los principales fabricantes de baterías de litio para vehículos de diferentes tamaños, desde bicicletas eléctricas a furgonetas de mayor peso. En Eurobike presentó sus últimas novedades, desarrolladas con la vista puesta en el mercado europeo. En 2022, la compañía invirtió 725 millones de euros en la puesta en marcha del proyecto de una fábrica de baterías en China con una capacidad de producción de 16 GWh. Además, completó una inversión de 135 millones de euros para acelerar su innovación tecnológica, cuyo resultado son nuevos productos y una nueva estrategia de negocio."}
                    img1='info-bici'
                    img2='info-bici'
                    img3='info-bici'/>
            </div>
        </div>
    );
}

export default Bateria;
