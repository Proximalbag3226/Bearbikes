import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';
import Principal from "../../Componentes/Principal";
import 'bootstrap/dist/css/bootstrap.min.css'
import variables from "../../Funciones/constantes";

const url = `http://${variables.apiHost}:${variables.apiPort}/${variables.taller}/getAll`;
const urlsdelete = `http://${variables.apiHost}:${variables.apiPort}/${variables.taller}/delete`;

const ShowProducts = () => {
    const key = 'admin'
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
                    <Link to='/createtaller' className="btn btn-dark" >Añadir</Link>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="texto">
                            <tr><th className="texto1">ID</th><th className="texto1">Taller</th><th className="texto1">Direccion</th><th className="texto1">Cantidad de empleados</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {talleres.map( (taller, i)=>(
                                <tr key={taller.id} className="texto">
                                    <td>{(i+1)}</td>
                                    <td>{taller.nombreEstablecimiento}</td>
                                    <td>{taller.direccion.calle}</td>
                                    <td>{ new Intl.NumberFormat('es-mx').format(taller.cantidadEmpleados)}</td>
                                    {key === 'admin' ? (   
                                    <td>
                                    <Link to={`/edit/${taller.id}`} className='btn btn-warning'>Editar</Link>
                                    &nbsp;
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