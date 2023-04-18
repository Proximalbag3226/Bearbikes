import React, { useState, createContext, useEffect } from 'react';

export const CarritoContext = createContext();
export const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  // Función que se ejecuta al inicio de la aplicación para cargar el carrito del almacenamiento local
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Función que se ejecuta al cierre de la aplicación para guardar el carrito en el almacenamiento local
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider value={[carrito, setCarrito]}>
      {props.children}
    </CarritoContext.Provider>
  );
};
