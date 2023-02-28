import { useState } from "react";
import Inputs from "../Componentes/Campos";
import Numero from "../Componentes/numero";
import Email from "../Componentes/email";
import Contra from "../Componentes/contra";
import Boton from "../Componentes/botonr";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido_pat: "",
        apellido_mat: "",
        telefono: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://26.157.218.13:9000/ciclistas/register", {
            //La direccion del fecht se cambia por que me de el pendejo del brandon
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Nombre"}
                    idt={"nombre"}
                    name={"nombre"}
                    value={formData.nombre}
                />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Apellido Paterno"}
                    idt={"apellido_pat"}
                    name={"apellido_pat"}
                    value={formData.apellido_pat}
                />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Apellido Materno"}
                    idt={"apellido_mat"}
                    name={"apellido_mat"}
                    value={formData.apellido_mat}
                />
                <br />
                <br />
                <Numero
                    placeholder={"Celular"}
                    name={"telefono"}
                    value={formData.telefono}
                    change={handleChange}
                />
                <br />
                <br />
                <Email data={formData.email} change={handleChange} />
                <br />
                <br />
                <Contra
                    placeholder={"Contraseña"}
                    data={formData.password}
                    change={handleChange}
                />
                <br />
                <br />
                <br />
                <Boton/>
            </div>
        </form>
    );
};

export default Formulario;
