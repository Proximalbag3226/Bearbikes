import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { redirect } from 'react-router-dom';

import Inicio from './../components/pages/homePage';
import BeardBikes from './../components/pages/beardbikes';

import RegistroCiclista from '../components/pages/registros/RegistroCiclista';
import RegistroAdmin from '../components/pages/registros/RegistroAdmin';
import RegistroDueñoTaller from '../components/pages/registros/RegistroDueñoTaller';
import RegistroDueñoComercio from '../components/pages/registros/RegistroDueñoComercio';

import Infot from './../components/pages/infot';
import Infob from './../components/pages/Infob';

/* INFORMACION DE LOS LUGARES */

import Bellasartes from './../components/pages/places/Bellasartes';
import Zocalo from './../components/pages/places/Zocalo';
import Torre from './../components/pages/places/Torre';
import Xochimilco from './../components/pages/places/Xochimilco';
import Reforma from './../components/pages/places/Reforma';
import Polanco from './../components/pages/places/Polanco';
import Basilica from './../components/pages/places/Basilica';
import Chapultepec from './../components/pages/places/Chapultepec';

import Tienda from './../components/pages/Tienda';
//import Map from './../components/pages/Rutas';
//import Rutas from '../components/pages/rutas/CreadorRutas';
import Avisos from './../components/pages/Avisos';
import Cuadro_b from './../components/pages/Cuadro_b';
import Eleccion from './../components/pages/Eleccion';
import Login from './../components/pages/Login';
import RoutingMachine from '../components/pages/rutas/Rutas';


const router = createBrowserRouter([
    {
      path: '/',
      element: <BeardBikes/>
    },
    {
      path: '/registroCiclista',
      element: <RegistroCiclista/>
    },
    {
      path: '/registroAdmin',
      element: <RegistroAdmin/>
    },
    {
      path: '/registroDueñoTaller',
      element: <RegistroDueñoTaller/>
    },
    {
      path: '/registroDueñoComercio',
      element: <RegistroDueñoComercio/>
    },
    {
      path: '/info',
      element: <Inicio/>
    },
    {
      path: '/tienda',
      element: <Tienda/>
    },
    {
      path: '/infot',
      element: <Infot/>
    },
    {
      path: '/infob',
      element: <Infob/>
    },
    {
      path: '/zocalo',
      element: <Zocalo/>
    },
    {
      path: '/bellasartes',
      element: <Bellasartes/>
    },
    {
      path: '/torre',
      element: <Torre/>
    },
    {
      path: '/xochimilco',
      element: <Xochimilco/>
    },
    {
      path: '/reforma',
      element: <Reforma/>
    },
    {
      path: '/polanco',
      element: <Polanco/>
    },
    {
      path: '/basilica',
      element: <Basilica/>
    },
    {
      path: '/chapultepec',
      element: <Chapultepec/>
    },
    {
      path: '/rutas',
      element: <RoutingMachine />
    },
    {
      path: '/avisos',
      element: <Avisos/>
    },
    {
      path: '/tienda',
      element: <Tienda/>
    },
    {
      path: '/cuadro',
      element: <Cuadro_b/>
    },
    {
      path: '/eleccion',
      element: <Eleccion/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  
  
  ]);

  export default router;