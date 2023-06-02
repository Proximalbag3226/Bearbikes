import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';
import Principal from "../../Componentes/Principal";
import 'bootstrap/dist/css/bootstrap.min.css'
import variables from "../../Funciones/constantes";

const url = `http://${variables.apiHost}:${variables.apiPort}/${variables.comercio}/getAll`;
const urlsdelete = `http://${variables.apiHost}:${variables.apiPort}/${variables.comercio}/delete`;

const ShowComercio = () => {
    const key = 'admin'
    const [comercios, setComercios] = useState([]);
    useEffect(() => {
        getComercios();
    },[]);
    const getComercios = async() =>{
        const respuesta = await axios.get(url);
        setComercios(respuesta.data);
    }
    const deleteComercio = async(id) =>{
        const headers = {
            'Content-Type': 'application/json',
          };
          const data = {
            'id' : id
          }
        await axios.post(urlsdelete, data, {headers: headers});
        getComercios();
    }
  return (
    <div className="container-fluid">
        <Principal/>
        <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
                <div className="d-grid mx-auto">
                    <Link to='/createcomercio' className="btn btn-dark" >Añadir Nuevo Comercio</Link>
                </div>  
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="texto">
                            <tr><th className="texto1">ID</th><th className="texto1">Comercios</th><th className="texto1">Direccion</th><th className="texto1">Colonia</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {comercios.map( (comercios, i)=>(
                                <tr key={comercios.id} className="texto">
                                    <td>{(i+1)}</td>
                                    <td>{comercios.nombreEstablecimiento}</td>
                                    <td>{comercios.direccion.calle}</td>
                                    <td>{comercios.direccion.colonia}</td>
                                    {key === 'admin' ? (   
                                    <td>
                                    <Link to={`/edit/${comercios.id}`} className='btn btn-warning'>Editar</Link>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={()=>deleteComercio(comercios.id)}>Eliminar</button>
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

export default ShowComercio