import Producto from "../Componentes/Producto";
import Principal from "../Componentes/Principal";

const Tienda = () =>{
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Producto
                producto={"Amortiguador de suspencion"}
                img1={"basilica_1"}
                precio={"$50"}/>
            </div>
        </div>
    );
}

export default Tienda