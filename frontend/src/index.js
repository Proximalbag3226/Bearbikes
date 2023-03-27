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
import Tienda from "./Paginas/Tienda";
import Map from './Paginas/Rutas';
import Aviso from './Paginas/Avisos';
import Cuadro_b from './Paginas/Infobicicletas/Cuadro_b';
import Eleccion from './Paginas/Registro/Eleccion';
import Login from './Paginas/Registro/Login';

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
    element: <Map/>
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
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
