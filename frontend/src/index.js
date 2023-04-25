import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'
import Inicio from './Modificados/inicio';
import BeardBikes from './Paginas/beardbikes';
import Ciclistasf from './Paginas/Registro/Ciclistasf';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Infot from "./Paginas/Sitios/infot";
import Infob from "./Paginas/Infobicicletas/Infob";
import Bellasartes from "./Paginas/Sitios/Bellasartes";
import Zocalo from "./Paginas/Sitios/Zocalo";
import Torre from "./Paginas/Sitios/Torre";
import Xochimilco from "./Paginas/Sitios/Xochimilco";
import Reforma from "./Paginas/Sitios/Reforma";
import Polanco from "./Paginas/Sitios/Polanco";
import Basilica from "./Paginas/Sitios/Basilica";
import Chapultepec from "./Paginas/Sitios/Chapultepec";
import Mapa from './Paginas/Rutas';
import Aviso from './Paginas/Avisos';
import Cuadro_b from './Paginas/Infobicicletas/Cuadro_b';
import Eleccion from './Paginas/Registro/Eleccion';
import Login from './Paginas/Registro/Login';
import Admin from './Paginas/Registro/Adminf';
import Dueño_comercio from './Paginas/Registro/Comercio';
import Dueño_taller from './Paginas/Registro/Tallerf';
import { redirect } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { isAuthenticated } from './Funciones/Permitir_acceso';
import Tienda from './Paginas/Tienda/Componentes/Tienda';
import { CarritoProvider } from './Paginas/Tienda/Componentes/Carritocontext';
import Carrito from './Paginas/Tienda/Componentes/Carrito';
import Talleres from './Paginas/Talleres/Talleres';
import Taller1 from './Paginas/Talleres/Taller1';
import Taller2 from './Paginas/Talleres/Taller2';
import Comercios from './Paginas/Comercios/Comercios';
import Comercio1 from './Paginas/Comercios/comercio1';
import Tienda2 from './Paginas/Tienda2/Componentes/Tienda2';
import Reparaciones from './Paginas/Reparaciones/Reparaciones';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BeardBikes/>
  },
  {
    path: '/ciclistasform',
    element: <Ciclistasf/>
  },
  {
    path: '/adminform',
    element: <Admin/>
  },
  {
    path: '/dueñoTallerForm',
    element: <Dueño_taller/>
  },
  {
    path: '/dueñoComercioForm',
    element: <Dueño_comercio/>
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
    element: <Mapa/>
  },
  {
    path: '/avisos',
    element: <Aviso/>
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
  },
  {
    path: '/carrito',
    element: <Carrito/>
  },
  {
    path: '/tienda',
    element: <Tienda/>
  },
  {
    path: '/talleres',
    element: <Talleres/>
  },
  {
    path: '/taller1',
    element: <Taller1/>
  },
  {
    path: '/taller2',
    element: <Taller2/>
  },
  {
    path: '/comercios',
    element: <Comercios/>
  },
  {
    path: '/comercio1',
    element: <Comercio1/>
  },
  {
    path: '/tienda2',
    element: <Tienda2/>
  },
  {
    path: '/reparaciones',
    element: <Reparaciones/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <RouterProvider router={router}/>
  </CarritoProvider>
);
