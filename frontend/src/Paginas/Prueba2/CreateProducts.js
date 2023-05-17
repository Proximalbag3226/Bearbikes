import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';
import Principal from "../../Componentes/Principal";
import 'bootstrap/dist/css/bootstrap.min.css'

const url = 'http://api-products.run/index.php';

const CreateProducts = () => {
    const[name, setName]= useState('');
    const[description, setDescription]= useState('');
    const[price, setPrice]= useState(0);
    const redirect = useNavigate();

    const store = async(e) =>{
        e.preventDefault();
        await axios.post(url, {name:name,description:description,price:price});
        redirect('/');
    }

  return (
    <div className="container-fluid">
        <Principal/>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Añadir productos</div>
                    <div className="card-body">
                        <form onSubmit={store}>
                            <label>Nombre: </label>
                            <input type='text' id='nombre' maxLength='80' 
                            className="form-control"
                            required={true} value={name} onChange={ (e) => setName(e.target.value)}>
                            </input>
                            <label>Direccion: </label>
                            <input type='text' id='descripcion' maxLength='150' 
                            className="form-control"
                            required={true} value={description} onChange={ (e) => setDescription(e.target.value)}>
                            </input>
                            <label>Horario: </label>
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

export default CreateProducts