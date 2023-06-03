import Principal from "../../Componentes/Principal";
import Ubicacion from "./Ubicacion";

const Taller2 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    coordinates={[18.443876740696666, -99.17962725340328]}
                    lugar={"Taller Don Juan"}
                    text={"aquii va una breve descripción del taller"}
                    img1='taller2'
                    img2='taller2.1'
                    img3='taller2.2'/>
            </div>
        </div>
    );
}

export default Taller2