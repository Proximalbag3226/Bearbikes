import React, { useState } from 'react';
import Producto from './Producto';
import Principal from './Principal';

function Tienda2(){   
  return (
    <div>
      <div>
        <Principal />
      </div>
      <br />
      <p
        style={{
          color: '#FFFFFF',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        ¡Bienvenido a la tienda!
      </p>
      <center>
        <div className="productos">
          <Producto
            id={'01'}
            producto={'alebrije'}
            img1={'Amortiguadordesuspensión'}
            nombre={'Amortiguador'}
            precio={60}
          />
          <Producto
            id={'02'}
            producto={'muñeca'}
            img1={'asiento'}
            nombre={"Asiento"}
            precio={80}
          />
          <Producto
            id={'03'}
            producto={'Casete'}
            img1={'platos'}
            nombre={'Casete'}
            precio={100}
          />
        </div>
      </center>
    </div>
  );
};

export default Tienda2;
