import React, { useState } from 'react';
import Boton from './Boton';
import { CarritoContext } from './Carritocontext';
import { useContext } from 'react';
class ProductoTienda {
  nombre = "";
  precio = 0;
  id = 0;

  constructor(nombre, precio, id){
    this.id = id;
    this.nombre= nombre;
    this.precio= precio;
  }
}

function Producto(props) {
  const [carrito, setCarrito] = useContext(CarritoContext);
  const handleClick = () => {


    setCarrito([...carrito, new ProductoTienda(props.producto, props.precio, props.id)]);
    console.log("Productos seleccionados: ", carrito, props.producto);
    alert('El producto ha sido agregado al carrito de compra.');
    console.log('propiedades que no jalan' + props)
  };

  return (
    <>
    <div className="product-container" key={props.id}>
      <h3 style={{ color: 'white', textAlign: 'center', fontSize: '40px', fontFamily: 'Roboto', marginBottom: '15px',}}> {props.producto} </h3>
      <h3>
        <img src={require(`../../../IMG/${props.img1}.jpg`)} alt={props.nombre}/>
      </h3>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '45px', fontFamily: 'Franklin Gothic', fontWeight: 'inherit',}}> {props.precio} </p>
      <Boton boton={'Agregar'} onClick={handleClick} />
    </div>
    <div>
      
    </div>
    </>
  );
}

export default Producto;
