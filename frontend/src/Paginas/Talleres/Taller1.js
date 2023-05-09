import Principal from "../../Componentes/Principal";
import Ubicacion from "./Ubicacion";

const Taller1 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    coordinates={[19.443876740696666, -99.17962725340328]}
                    lugar={"Taller El chino"}
                    text={"aquii va una breve descripción del taller"}
                    img1='taller1.1'
                    img2='taller1.2'
                    img3='taller1.3'/>
            </div>
        </div>
    );
}

export default Taller1