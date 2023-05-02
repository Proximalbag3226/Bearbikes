import Principal from "../../Componentes/Principal"
import 'bootstrap/dist/css/bootstrap.css';

function GestionTaller() {
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
                                        <th scope="col">STATUS</th>
                                        <th scope="col">PREGUNTA</th>
                                        <th scope="col">SOLUCION</th>
                                        <th scope="col">FECHA</th>
                                        <th scope="col">TIPO</th>
                                        <th scope="col">ENVIADO</th>
                                        <th scope="col" style={{display: 'inherited',}}>GERENTE<br />SOPORTE</th>
                                        <th scope="col" style={{display: 'inherited',}}>INGENIERO<br />SOPORTE</th>
                                        <th scope="col" style={{display: 'inherited',}}>EDITOR</th>
                                    </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'white'}}>
                                    <tr><td>1</td><td>usuario@correo.com</td><td>asdf</td><td>ABIERTO</td><td>asdfasdf</td><td>Solución Pendiente</td><td>2023-05-02</td><td>SIN_ESPECIFICAR</td><td>false</td><td style={{display: 'inherited',}}><button type='submit' style={{display: 'block'}} className='botonAsignarIngeniero_gerenteSoporte w-100 btn btn-lg btn-primary' value='1'>Asignar Ingeniero</button></td><td style={{display: 'inherited'}}><button type='submit' style={{display: 'none'}} className='botonResolverReporte_ingSoporte w-100 btn btn-lg btn-primary' value='1'>Resolver Reporte</button><button type='submit' style={{display: 'none'}} className='botonDevolverReporte_ingSoporte w-100 btn btn-lg btn-primary' value='1'>Devolver Reporte</button></td><td style={{display: 'inherited'}}><button type='submit' style={{display: 'none'}} className='botonAñadirComoFaqSoporte w-100 btn btn-lg btn-primary' value='1'>Publicar</button></td></tr>

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