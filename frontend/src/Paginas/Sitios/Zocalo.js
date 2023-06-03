import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"

const Zocalo = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Infos
                    lugar={"Zócalo"}
                    text={"El Zócalo, o mejor conocido como, La Plaza de La Constitución, es la plaza principal de la Ciudad de México. Su nombre viene de una base construida durante el gobierno de Antonio López de Santa Anna. En él, podemos ir a los otros lugares de interés a su alrededor, siendo: La Catedral Metropolitana, Museo del Estanquillo, Café de Tacúba, Mercado de San Juan, Barrio Alameda, y Museo Memoria y Tolerancia"}
                    img1='zocalo_1'
                    img2='zocalo_2'
                    img3='zocalo_3'/>
            </div>
        </div>
    );
}

export default Zocalo