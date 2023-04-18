<<<<<<<< HEAD:frontend/src/components/pages/Infobicicletas/Cuadro_b.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../common/menu";
import Infos from "./info/Infos"
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/Cuadro_b.js

const Cuadro_b = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <Infos
                    lugar={"Como saber si tu cuadro de bici es original"}
                    text={"En el mundo de las bicicletas, los productos falsificados son un desafío directo para la industria y el consumidor. Por ello se dedican recursos considerables para ponerle freno aunque, con todos los diseños diferentes y productos falsificados disponibles, puede ser difícil saber si tenemos ante nosotros el artículo genuino. Afortunadamente, en el caso de los cuadros de bicicleta hay varios aspectos a tener en cuenta a la hora de determinar si es el original de la marca."}
                    img1='info-casco'
                    img2='info-casco'
                    img3='info-casco'/>
            </div>
        </div>
    );
}

export default Cuadro_b;
