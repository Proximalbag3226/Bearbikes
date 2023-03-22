import { useState } from "react";
import Inputs from "../Componentes/Campos";
import Numero from "../Componentes/numero";
import Email from "../Componentes/email";
import Contra from "../Componentes/contra";
import Boton from "../Componentes/botonr";
import { registerUser } from "../Componentes/Register";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido_pat: "",
        apellido_mat: "",
        numerocelular: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await registerUser(formData);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
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
                    idt={"apellidoPat"}
                    name={"apellidoPat"}
                    value={formData.apellidoPat}
                />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Apellido Materno"}
                    idt={"apellidoMat"}
                    name={"apellidoMat"}
                    value={formData.apellidoMat}
                />
                <br />
                <br />
                <Numero
                    placeholder={"numerocelular"}
                    name={"numerocelular"}
                    value={formData.numerocelular}
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
                <Boton
                    boton={"listo"}/>
            </div>
        </form>
    );
};

export default Formulario;
