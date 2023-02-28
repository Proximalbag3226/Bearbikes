import Boton from "./botonr";

function Producto(props){
    return(
        <div className="product-container">
            <h3 style={{color: "white",
                textAlign: "center",
                fontSize: "40px",
                fontFamily: 'Oranienbaum',
                marginBottom: '15px',}}>{props.producto}</h3>
            <h3>
                <img src={require(`../IMG/${props.img1}.jpg`)}/>
            </h3>
            <h1 style={{color: "white",
                textAlign: "center",
                fontSize: "40px",
                fontFamily: 'Oranienbaum',
                marginBottom: '15px',}}>{props.precio}</h1>
            <Boton/>
        </div>
    );
}

export default Producto