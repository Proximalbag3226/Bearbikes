import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';
import Principal from "../../Componentes/Principal";
import 'bootstrap/dist/css/bootstrap.min.css'
import variables from "../../Funciones/constantes";
import jwt_decode from "jwt-decode";

const url = `http://${variables.apiHost}:${variables.apiPort}/${variables.taller}/getAll`;
const urlsdelete = `http://${variables.apiHost}:${variables.apiPort}/${variables.taller}/delete`;

const ShowProducts = () => {
    function decodificado(){
        const token = localStorage.getItem("token");
        if  (token) {
          try{
            const tokenDecodificado = jwt_decode(token);
            console.log(tokenDecodificado);
            return tokenDecodificado;
          } catch (error) {
            console.error('El token no ha podido ser decodificado', error);
          }
        }
        return null;
      }
      const tokenDecodificado = decodificado();
      const key = tokenDecodificado?.role;
    const [talleres, setTalleres] = useState([]);
    useEffect(() => {
        getTalleres();
    },[]);
    const getTalleres = async() =>{
        const respuesta = await axios.get(url);
        setTalleres(respuesta.data);
    }
    const deleteTaller = async(id) =>{
        const headers = {
            'Content-Type': 'application/json',
          };
          const data = {
            'id' : id
          }
        await axios.post(urlsdelete, data, {headers: headers});
        getTalleres();
    }
  return (
    <div className="container-fluid">
        <Principal/>
        <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
                <div className="d-grid mx-auto">
                {key === 'DUEÑO_TALLER'?(
                         <Link to='/createtaller' className="btn btn-dark" >Añadir Nuevo Taller</Link>
                    ):(
                        <h1 className="titulo">Nuevos Talleres</h1>
                    )}
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="texto">
                            <tr><th className="texto1">Contacto</th><th className="texto1">Taller</th><th className="texto1">Direccion</th><th className="texto1">Cantidad de empleados</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {talleres.map( (taller, i)=>(
                                <tr key={taller.emailDueñoEstablecimiento} className="texto">
                                    <td>{taller.emailDueñoEstablecimiento}</td>
                                    <td>{taller.nombreEstablecimiento}</td>
                                    <td>{taller.direccion.calle}</td>
                                    <td>{ new Intl.NumberFormat('es-mx').format(taller.cantidadEmpleados)}</td>
                                    {key === 'DUEÑO_TALLER' ? (   
                                    <td>
                                    <button className="btn btn-danger" onClick={()=>deleteTaller(taller.id)}>Eliminar</button>
                                    </td>
                                    ) : (
                                    <></>
                                    )}
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProducts