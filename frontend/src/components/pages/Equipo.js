import Menu from "../common/menu";
import Infos from "../Componentes/Infos"

const Equipo = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <Infos
                    lugar={"Equipo de seguridad"}
                    text={"Tal y como especifica el artículo 22 del Reglamento General de Vehículos, todas las bicicletas deben equipar dos luces de posición: una en la parte delantera de color blanco, y otra en la posterior en color rojo.Ambas deben estar homologadas y, en el caso de la trasera, debe asimismo estar respaldada por un catadióptrico o reflectante de una forma que no sea triangular, ya que se podría confundir con una señal de emergencia. Todo este equipo es obligatorio cuando se circula de noche, en túneles o en condiciones de baja visibilidad como niebla o lluvia fuerte, tanto fuera como dentro de poblaciones."}
                    img1='info-equipo'
                    img2='info-equipo'
                    img3='info-equipo'/>
            </div>
        </div>
    );
}

export default Equipo;
