import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from './Carritocontext';
import Principal from './Principal';

function Carrito() {
  const [carrito, setCarrito] = useContext(CarritoContext);
  const [total, setTotal] = useState(0);

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  useEffect(() => {
    const carritoEnLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    if (carritoEnLocalStorage) {
      setCarrito(carritoEnLocalStorage);
    }
  }, [setCarrito]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carrito.length; i++) {
      sum += carrito[i].precio;
    }
    setTotal(sum);
  }, [carrito]);

  return (
    <div>
      <Principal />
      <h2 className='titulo'>Carrito de compra</h2>
      <br/><br/>
      {carrito.length === 0 ? (
        <p className='texto0'>No hay productos en el carrito.</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id} className='texto0'>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </div>
        ))
      )}
      <br/>
      <h3 className='texto0'>Total: {total}</h3>
      <br/>
      <h3 className='texto0'>Estos productos seran enviados a su tienda de refacciones mas cercana, por favor acuda a ella lo antes posible</h3>
    </div>
  );
}

export default Carrito;
