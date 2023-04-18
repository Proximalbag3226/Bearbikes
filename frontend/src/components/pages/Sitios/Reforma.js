<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Reforma.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../../common/menu";
import Infos from "./Infos";
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Reforma.js

const Reforma = () => {
    return(
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Reforma.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Reforma.js
            </div>
            <div>
                <Infos
                    lugar={"Reforma"}
                    text={"El paseo de la Reforma es la avenida más importante y emblemática de la Ciudad de México. Su extensión supera los 12 kilómetros, también se considera como una de las más grandes. Nació bajo el nombre de Paseo de la Emperatriz hasta que finalmente adoptó el nombre de Paseo de la Reforma. Las estatuas que bordean este paseo son 77 y están divididas en dos grandes etapas; la primera concluida en el siglo XIX y la segunda en el siglo XX, cuyos trabajos se realizaron en la zona sur y en la zona norte del Paseo de la Reforma."}
                    img1='reforma_1'
                    img2='reforma_2'
                    img3='reforma_3'/>
            </div>
        </div>
    );
}

export default Reforma