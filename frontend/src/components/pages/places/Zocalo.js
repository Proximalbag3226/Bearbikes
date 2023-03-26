import Menu from "../../common/menu";
import Infos from "./Infos";

const Zocalo = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <Infos
                    lugar={"Zocalo"}
                    text={"El Zocalo, o mejor conocido como, La Plaza de La Constitucion, es la plaza principal de la Ciudad de Mexico. Su nombre viene de una base construida durante el gobierno de Antonio López de Santa Anna. En él, podemos ir a los otros lugares de interes a su alrededir, siendo: La Catedral Metropolitana Museo del Estanquillo Café de Tacuba Mercado de San Juan Barrio Alameda Museo Memoria y Tolerancia"}
                    img1='zocalo_1'
                    img2='zocalo_2'
                    img3='zocalo_3'/>
            </div>
        </div>
    );
}

export default Zocalo