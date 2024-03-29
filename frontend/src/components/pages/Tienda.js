import Producto from "./tienda/Producto";
import Menu from "../common/menu";

const Tienda = () =>{
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <br/>
            <p style={{color:"#FFFFFF",textAlign:"center", fontWeight:"bold", fontSize:"50px"}}>¡Bienvenido a la tienda!</p>
            <center>
            <div className="productos">
                <Producto
                producto={"Amort. de suspensión"}
                img1={"Amortiguadordesuspensión"}
                precio={"$50"}/>
                <Producto
                producto={"Asiento"}
                img1={"asiento"}
                precio={"$50"}/>
                <Producto
                producto={"Casete"}
                img1={"Casetedebicicleta"}
                precio={"$50"}/>
                <Producto
                producto={"Frenos de disco"}
                img1={"frenodediscoparabicicleta"}
                precio={"$50"}/>
                <Producto
                producto={"Manubrio"}
                img1={"ManubrioBicicleta"}
                precio={"$50"}/>
                <Producto
                producto={"Puños"}
                img1={"PuñosBicicleta"}
                precio={"$50"}/>
                <Producto
                producto={"Soporte de bicicleta"}
                img1={"SoporteBicicleta"}
                precio={"$50"}/>
                <Producto
                producto={"Tapas de extremo"}
                img1={"tapasdeextremodebarra"}
                precio={"$50"}/>
            </div>
            </center>
        </div>
    );
}

export default Tienda