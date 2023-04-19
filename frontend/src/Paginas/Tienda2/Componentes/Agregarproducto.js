import React, { useState } from 'react';
import Principal from './Principal';

function AgregarProducto(props) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un objeto con la información del nuevo producto
    const nuevoProducto = {
      nombre,
      precio,
      descripcion,
      imagen,
    };

    // Agregar el nuevo producto al estado de la tienda o enviarlo al servidor, dependiendo de cómo estés manejando los datos
    // ...

    // Limpiar los campos del formulario
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setImagen('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <Principal/>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Precio:
        <input type="number" value={precio} onChange={(event) => setPrecio(event.target.value)} />
      </label>
      <br />
      <label>
        Descripción:
        <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
      </label>
      <br />
      <label>
        Imagen:
        <input type="text" value={imagen} onChange={(event) => setImagen(event.target.value)} />
      </label>
      <br />
      <button type="submit">Agregar producto</button>
    </form>
  );
}

export default AgregarProducto;
