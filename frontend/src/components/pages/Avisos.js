import Menu from "../common/menu";
import Aviso from "./Aviso";

const Avisos = () => {
    return(
        
        <div>
            <Menu/>
            <br/><br/>
            <p style={{color:"#FFFFFF",textAlign:"center", fontWeight:"bold", fontSize:"50px"}}>Avisos</p>
            <br/>
            <div>
            <center>
                <Aviso
                titulo={"Pruebas en el GPS"}
                fecha={"14/03/2023"}
                text={"Estamos buscando a Testers que nos ayuden a probar nuestro creador de rutas con GPS movil, para eso, contactanos a bearbikesproyect@gmail.com"}
                />
            </center>
            <br/><br/>
            <center>
                <Aviso
                titulo={"Servicios mejorados"}
                fecha={"13/03/2023"}
                text={"Antes los nuevos avances que hemos tenido, ahora podras gozar de nuevas funciones que no se tenian en la anterior versión."}
                />
            </center>
            <br/><br/>
            <center>
                <Aviso
                titulo={"Preparándonos"}
                fecha={"12/03/2023"}
                text={"Hola, este es el primer aviso que anunciamos ante la pagina, espero y disfrutes de tu estadía. Nosotros nos mantendremos trabajando para terminar este proyecto."}
                />
            </center>
            <br/><br/>
            
            </div>
        </div>
    );
}

export default Avisos