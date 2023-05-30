import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';
import Principal from "../../Componentes/Principal";
import 'bootstrap/dist/css/bootstrap.min.css'
import jwt_decode from "jwt-decode";
import variables from "../../Funciones/constantes";

const url = `http://${variables.apiHost}:${variables.apiPort}/${variables.taller}/register`;

const CreateProducts = () => {
    const[nombreEstablecimiento, setNombreEstablecimiento]= useState('');
    const[direccionEstablecimiento, setDireccionEstablecimiento]= useState('');
    const[calle, setCalle]= useState('');
    const[numeroInterior, setNumeroInterior]= useState('');
    const[numeroExterior, setNumeroExterior]= useState('');
    const[colonia, setColonia]= useState('');
    const[alcaldia, setAlcaldia]= useState('');
    const[ciudad, setCiudad]= useState('');
    const[cantidadEmpleados, setCantidadEmpleados]= useState(0);
    const[rfcEstablecimiento, setRfcEstablecimiento] = useState('');

    const type = "taller"
    const tipoDireccion = "ESTABLECIMIENTO"
    const token = localStorage.getItem("token")
    const redirect = useNavigate();
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
    const email = tokenDecodificado?.sub;
    const store = async (e) => {
        e.preventDefault();
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Agrega el encabezado JWT con el token
        };
      
        const data = {
          nombreEstablecimiento: nombreEstablecimiento,
          direccionEstablecimiento: direccionEstablecimiento,
          cantidadEmpleados: cantidadEmpleados,
          rfcEstablecimiento: rfcEstablecimiento,
          direccionEstablecimiento : { 
            tipoDireccion : tipoDireccion,
            calle: calle,
            numeroInterior : numeroInterior,
            numeroExterior : numeroExterior,
            colonia: colonia,
            alcaldia: alcaldia,
            ciudad: ciudad,
        },
          type: type,
          email: email,
        };
        axios.post(url, data, { headers: headers }); //quitando el await ya se puede realizar la redireccion
        redirect('/nuevostalleres');
      };

  return (
    <div className="container-fluid">
        <Principal/>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Añadir Talleres</div>
                    <div className="card-body">
                        <form onSubmit={store}>
                            <label>Nombre: </label>
                            <input type='text' id='nombre' maxLength='80' 
                            className="form-control"
                            required={true} value={nombreEstablecimiento} onChange={ (e) => setNombreEstablecimiento(e.target.value)}>
                            </input>
                            <label>Calle: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={calle} onChange={ (e) => setCalle(e.target.value)}>
                            </input>
                            <label>Numero Exterior: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={numeroExterior} onChange={ (e) => setNumeroExterior(e.target.value)}>
                            </input>
                            <label>Numero Interior: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={numeroInterior} onChange={ (e) => setNumeroInterior(e.target.value)}>
                            </input>
                            <label>Colonia: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={colonia} onChange={ (e) => setColonia(e.target.value)}>
                            </input>
                            <label>Alcaldia: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={alcaldia} onChange={ (e) => setAlcaldia(e.target.value)}>
                            </input>
                            <label>Ciudad: </label>
                            <input type='text' id='direc' maxLength='80' 
                            className="form-control"
                            required={true} value={ciudad} onChange={ (e) => setCiudad(e.target.value)}>
                            </input>
                            <label>RFC: </label>
                            <input type='text' id='rfc' maxLength='150' 
                            className="form-control"
                            required={true} value={rfcEstablecimiento} onChange={ (e) => setRfcEstablecimiento(e.target.value)}>
                            </input>
                            <label>Cantidad de empleados: </label>
                            <input type='number' id='precio' 
                            className="form-control" step='0.1'
                            required={true} value={cantidadEmpleados} onChange={ (e) => setCantidadEmpleados(e.target.value)}>
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