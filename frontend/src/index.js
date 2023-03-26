import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import router from "./configs/routes";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
