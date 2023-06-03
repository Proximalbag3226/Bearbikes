import Principal from "../../Componentes/Principal";
import Ubicacion from "../Talleres/Ubicacion";

const Comercio2 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    coordinates={[19.443876740696666, -99.17962725340328]}
                    lugar={"Tlayuc"}
                    text={"Esta es la ubicación del comercio"}
                    img1='comercio1.1'
                    img2='comercio1.2'
                    img3='comercio1.3'/>
            </div>
        </div>
    );
}

export default Comercio2