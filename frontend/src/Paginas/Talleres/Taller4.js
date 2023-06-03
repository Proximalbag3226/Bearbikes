import Principal from "../../Componentes/Principal";
import Ubicacion from "./Ubicacion";

const Taller4 = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Ubicacion
                    coordinates={[19.456812682750108, -99.18437484911992]}
                    lugar={"Taller Brinspice"}
                    text={"aquii va una breve descripción del taller"}
                    img1='taller2'
                    img2='taller2.1'
                    img3='taller2.2'/>
            </div>
        </div>
    );
}

export default Taller4