import React, { useState } from 'react';
import Producto from './Producto';
import Principal from './Principal';
import { CarritoContext } from './Carritocontext';
import { useContext } from 'react';

function Tienda(){   
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
            id={'1'}
            producto={'Amort. de suspensión'}
            img1={'Amortiguadordesuspensión'}
            nombre={'Amortiguador'}
            precio={60}
          />
          <Producto
            id={'2'}
            producto={'Asiento'}
            img1={'asiento'}
            nombre={"Asiento"}
            precio={80}
          />
          <Producto
            id={'3'}
            producto={'Casete'}
            img1={'Casetedebicicleta'}
            nombre={'Casete'}
            precio={100}
          />
          <Producto
            id={'4'}
            producto={'Frenos de disco'}
            img1={'frenodediscoparabicicleta'}
            nombre={'Frenos'}
            precio={128}
          />
          <Producto
            id={'5'}
            producto={'Manubrio'}
            img1={'ManubrioBicicleta'}
            nombre={'Manubrio'}
            precio={350}
          />
          <Producto
            id={'6'}
            producto={'Puños'}
            img1={'PuñosBicicleta'}
            nombre={'Puños'}
            precio={202}
          />
          <Producto
            id={'7'}
            producto={'Soporte de bicicleta'}
            img1={'SoporteBicicleta'}
            nombre={'Soporte'}
            precio={404}
          />
          <Producto
            id={'8'}
            producto={'Tapas de extremo'}
            img1={'tapasdeextremodebarra'}
            nombre={'Tapas'}
            precio={63}
          />
        </div>
      </center>
    </div>
  );
};

export default Tienda;
