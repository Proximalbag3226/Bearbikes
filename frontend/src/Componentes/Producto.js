import Boton from "./botonr";

function Producto(props){
    const handleClick = () => {
        alert("El producto ha sido agregado al carrito de compra.");
    };

    return(
        <div className="product-container">
            <h3 style={{color: "white",
                textAlign: "center",
                fontSize: "40px",
                fontFamily: 'Roboto',
                marginBottom: '15px',}}>{props.producto}</h3>
            <h3>
                <img src={require(`../IMG/${props.img1}.jpg`)}/>
            </h3>
            <p style={{color: "white",
                textAlign: "center",
                fontSize: "45px",
                fontFamily: 'Franklin Gothic',
                fontWeight:'inherit',}}>{props.precio}</p>
            <Boton
                boton={"Agregar"}
                onClick={handleClick}
            />
        </div>
    );
}

export default Producto;
