import Principal from "../../Componentes/Principal";
import Ubicacion from "./Ubicacion";

const Taller3 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    coordinates={[19.44697059880854, -99.16737650092698]}
                    lugar={"Taller Mi princesa"}
                    text={"aquii va una breve descripción del taller"}
                    img1='taller2'
                    img2='taller2.1'
                    img3='taller2.2'/>
            </div>
        </div>
    );
}

export default Taller3