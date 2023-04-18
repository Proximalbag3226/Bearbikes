import React from 'react';

function Carrito(props) {
    const { productos } = props;

    return (
        <div>
            <h2>Carrito de compras</h2>
            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio total</th>
                </tr>
                </thead>
                <tbody>
                {productos.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad * producto.precio}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Carrito;
