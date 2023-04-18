<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Chapultepec.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../../common/menu";
import Infos from "./Infos"
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Chapultepec.js

const Chapultepec = () => {
    return(
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Chapultepec.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Chapultepec.js
            </div>
            <div>
                <Infos
                    lugar={"Chapultepec"}
                    text={"El bosque de Chapultepec o Chapultepec es un parque urbano localizado en la alcaldía Miguel Hidalgo, en la Ciudad de México. Cuenta con una superficie de 810 hectarias. Está dividido en cuatro secciones y alberga algunos de los sitios turísticos más importantes de México. Cuenta con tres lagos artificiales, espacios deportivos y numerosas fuentes. Dada la antigüedad en su ocupación humana el bosque fue declarado zona arqueológica y contiene numerosos vestigios históricos y se han hallado cerca de 4 mil objetos arqueológicos y está incluido desde el 2001 en la lista indicativa de los bienes candidatos a ser reconocidos como Patrimonio de la Humanidad en México."}
                    img1='chapultepe_1'
                    img2='chapultepe_2'
                    img3='chapultepe_3'/>
            </div>
        </div>
    );
}

export default Chapultepec