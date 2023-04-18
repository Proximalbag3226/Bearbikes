<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Bellasartes.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../../common/menu";
import Infos from "./Infos"
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Bellasartes.js

const Bellasartes = () => {
    return(
        <div>
        <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Bellasartes.js
            <Principal/>
========
            <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Bellasartes.js
        </div>
            <div>
                <Infos
                    lugar={"Bellas Artes"}
                    text={"El palacio de Bellas Artes es el recinto cultural ubicado en el centro de la Ciudad de Mexico. EN el albergan exhibiciones de arte y una variedad de eventos en vivo, que incluyen música, danza, teatro y ópera.La arquitectura del Palacio de Bellas Artes El Palacio de Bellas Artes abriga sobre todo, dos estilos arquitectónicos muy en boga a finales del siglo XIX y principios del XX: Art nouveau Art decó El exterior tiene un estilo marcadamente art nouveau y el interior tiene un estilo art decó."}
                    img1='bellasartes_1'
                    img2='bellasartes_2'
                    img3='bellasartes_3'/>
            </div>
        </div>
    );
}

export default Bellasartes