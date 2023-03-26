import BotonSubmit from "./botonTienda";

function Producto(props){
    return(
        <div className="product-container">
            <h3 style={{color: "white",
                textAlign: "center",
                fontSize: "40px",
                fontFamily: 'Roboto',
                marginBottom: '15px',}}>{props.producto}</h3>
            <h3>
                <img src={require(`../../../assets/img/${props.img1}.jpg`)}/>
            </h3>
            <p style={{color: "white",
                textAlign: "center",
                fontSize: "45px",
                fontFamily: 'Franklin Gothic', 
                fontWeight:'inherit',}}>{props.precio}</p>
            <BotonSubmit
            boton={"Agregar"}/>
        </div>
    );
}

export default Producto