import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'
import Inicio from './Compmodif/inicio';
import BeardBikes from './Paginas/beardbikes';
import Ciclistasf from './Paginas/Ciclistasf';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Infot from "./Paginas/infot";
import Infob from "./Paginas/Infob";
import Bellasartes from "./Paginas/Bellasartes";
import Zocalo from "./Paginas/Zocalo";
import Torre from "./Paginas/Torre";
import Xochimilco from "./Paginas/Xochimilco";
import Reforma from "./Paginas/Reforma";
import Polanco from "./Paginas/Polanco";
import Basilica from "./Paginas/Basilica";
import Chapultepec from "./Paginas/Chapultepec";
import Tienda from "./Paginas/Tienda";
import Eleccion from "./Paginas/Eleccion";
import Rutas from "./Paginas/Rutas";
import Cuadro_b from "./Paginas/Cuadro_b";
import Bateria from "./Paginas/Baterias";
import Equipo from "./Paginas/Equipo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <BeardBikes/>
  },
  {
    path: '/eleccion',
    element: <Eleccion/>
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
    element: <Rutas/>
  },
  {
    path:'/cuadro',
    element: <Cuadro_b/>
  },
  {
    path: '/bateria',
    element: <Bateria/>
  },
  {
    path: '/equipo',
    element: <Equipo/>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
