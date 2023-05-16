import React from "react";
import Comercios from "../Comercios/Comercios";
import Infot from "../Sitios/infot";
import { getUserInfo } from "../../Funciones/Validacion";

const Prueba = () => {
    const llave = 'admin';
    return(
        <div>
            <div>
                {llave === 'admin' ? (
                    <Comercios/>
                    ) : (
                    <Infot/>
                )}
            </div>
        </div>
    );
}

export default Prueba;
