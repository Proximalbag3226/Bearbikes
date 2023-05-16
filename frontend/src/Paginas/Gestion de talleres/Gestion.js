import Principal from "../../Componentes/Principal"
import 'bootstrap/dist/css/bootstrap.css';
import withAuthorization from "../../Funciones/Permitir_acceso";
import Boton from "../Tienda/Componentes/Boton";
import { useState } from "react";
function GestionTaller() {
    const [formData] = useState({
        id_taller: ""
      });
    const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch("http://192.168.20.110:9009/taller/eliminar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                localStorage.setItem("token", data.token);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            formData.id_taller=document.getElementById("id");
    };
    return (
        <div>
            <div>
                <Principal />
            </div>
            <div>
                <h1 className="titulo">Gestion de talleres</h1>
                <div>
                    <div className="col-md-10 mx-auto col-lg-10">
                        <div className="table-responsive">
                            <table className="table table-striped-columns table-responsive-sm table-hover" style={{'text-align': 'center'}}>
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">NOMBRE</th>
                                        <th scope="col">ELIMINAR</th>
                                    </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'white'}}>
                                    <tr><td id="id">1</td><td>usuario@correo.com</td><td>asdf</td><td><Boton onClick={handleSubmit} boton="Eliminar"/></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="divToasts">
                            <div aria-live="polite" aria-atomic="true"
                                className="d-flex justify-content-center align-items-center w-100">
                                <div id="botonAsignarIngeniero_gerenteSoporteToast" className="toast" role="alert" aria-live="assertive"
                                    aria-atomic="true" data-bs-autohide="false" style={{width: '80%'}}>
                                    <div className="toast-header">
                                        <strong className="me-auto"></strong><small></small>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div className="toast-body" id="botonAsignarIngeniero_gerenteSoporteBodyToast">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GestionTaller

//export default withAuthorization(GestionTaller, ['admin']);