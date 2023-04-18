<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Polanco.js
import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"
========
import Menu from "../../common/menu";
import Infos from "./Infos";
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Polanco.js

const Polanco = () => {
    return(
        <div>
            <div>
<<<<<<<< HEAD:frontend/src/components/pages/Sitios/Polanco.js
                <Principal/>
========
                <Menu/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/pages/places/Polanco.js
            </div>
            <div>
                <Infos
                    lugar={"Polanco"}
                    text={"Polanco es una colonia de la Ciudad de México, ubicada al norponiente de la misma en la alcaldía Miguel Hidalgo. La denominación Polanco es usada para designar dos grandes colonias, Polanco Chapultepec y Polanco Reforma. El área es sede de recintos culturales como museos y galerías; empresas, embajadas, y negocios de esparcimiento como restaurantes, tiendas de lujo y centros comerciales. La mayoría de sus calles y avenidas fueron nombradas a personajes de la ciencia y la literatura."}
                    img1='polanco_1'
                    img2='polanco_2'
                    img3='polanco_3'/>
            </div>
        </div>
    );
}

export default Polanco