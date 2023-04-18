<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Torre.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../../common/menu";
import Infos from "./Infos";
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Torre.js

const Torre = () => {
    return(
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Torre.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Torre.js
            </div>
            <div>
                <Infos
                    lugar={"Torre Latinoamericana"}
                    text={"La torre Latinoamericana es el rascacielos ubicado en el centro de la Ciudad de Mexico. La construcción abarcó de 1948 a 1956. Fue el edificio más alto de la ciudad de México desde su construcción en 1956 hasta 1972. En él puedes subir al Mirador, tomar un cafe o bebidas alcoholicas, comer e ir a los museos del Bicentenario y de la Ciudad de Mexico."}
                    img1='torre_1'
                    img2='torre_2'
                    img3='torre_3'/>
            </div>
        </div>
    );
}

export default Torre