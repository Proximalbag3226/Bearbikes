import Principal from "../../Componentes/Principal";
import Ubicacion from "../Talleres/Ubicacion";

const Comercio1 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    posicion={"19.443876740696666, -99.17962725340328"}
                    posicion1={"19.443876740696666, -99.17962725340328"}
                    lugar={"Tienda de ropa ay wey"}
                    text={"aquii va una breve descripción del taller"}
                    img1='comercio1.1'
                    img2='comercio1.2'
                    img3='comercio1.3'/>
            </div>
        </div>
    );
}

export default Comercio1