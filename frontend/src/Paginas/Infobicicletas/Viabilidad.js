import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"

const Viabilidad = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Infos
                    lugar={"¿Son viables los sistemas de bicicletas compartidas en México?"}
                    text={"En la ciudad de León, Guanajuato, se diseñó un SBC y se adoptó un enfoque de investigación-acción que implica un proceso iterativo que incluye la identificación del problema, la planeación de acciones, la evaluación y la reflexión para revisar acciones. El equipo responsable del diseño estuvo integrado por autoridades del Instituto Municipal de Planeación de León (IMPLAN) y un grupo de investigación interdisciplinario quienes identificaron el problema como diseñar un SBC al menor costo posible que satisfaga un nivel preestablecido de la demanda esperada y reduzca al máximo las emisiones de CO₂."}
                    img1='info-rojo'
                    img2='info-rojo'
                    img3='info-rojo'/>
            </div>
        </div>
    );
}

export default Viabilidad;
