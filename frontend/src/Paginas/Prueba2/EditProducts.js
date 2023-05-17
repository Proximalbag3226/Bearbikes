import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from "../../Componentes/Principal";
const url = 'http://api-products.run/index.php';

const EditProducts = () => {
    const[name, setName]= useState('');
    const[description, setDescription]= useState('');
    const[price, setPrice]= useState(0);
    const {id} = useParams();
    const redirect = useNavigate();
    

    useEffect( () =>{
        const getProduct = async() =>{
            const options = {headers: {'Content-Type': 'application/json'},params:{id:id} };
            const respuesta = await axios.get(url,options);
            setName(respuesta.data[0].name);
            setDescription(respuesta.data[0].description);
            setPrice(respuesta.data[0].price);
        }
        getProduct();
    },[]);

    const update = async(e) =>{
        e.preventDefault();
        await axios.put(url,{id:id,name:name,description:description,price:price});
        redirect('/');
    }

  return (
    <div className="container-fluid">
        <Principal/>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Editar productos</div>
                    <div className="card-body">
                        <form onSubmit={update}>
                            <label>Nombre: </label>
                            <input type='text' id='nombre' maxLength='80' 
                            className="form-control"
                            required={true} value={name} onChange={ (e) => setName(e.target.value)}>
                            </input>
                            <label>Descripción: </label>
                            <input type='text' id='descripcion' maxLength='150' 
                            className="form-control"
                            required={true} value={description} onChange={ (e) => setDescription(e.target.value)}>
                            </input>
                            <label>Precio: </label>
                            <input type='number' id='precio' 
                            className="form-control" step='0.1'
                            required={true} value={price} onChange={ (e) => setPrice(e.target.value)}>
                            </input>
                            <button className="btn btn-success mt-3">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProducts