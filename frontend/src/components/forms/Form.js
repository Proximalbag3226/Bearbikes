import {Functionform} from './Functionform';
import Inputs from "./campoFormulario";
import BotonSubmit from "./botonFormulario";
import PasswordInput from "./contraFormulario";
import Email from "./emailFormulario";
import Numero from "./numeroFormulario";

const Formulario = (tipoUsuario) => {
    const { formData, handleChange, handleSubmit } = Functionform(tipoUsuario);
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
                    idt={"name"}
                    name={"name"}
                    data={formData.name}
                />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Apellido Paterno"}
                    idt={"apellidoPat"}
                    name={"apellidoPat"}
                    data={formData.apellidoPat}
                />
                <br />
                <br />
                <Inputs
                    handleChange={handleChange}
                    placeholder={"Apellido Materno"}
                    idt={"apellidoMat"}
                    name={"apellidoMat"}
                    data={formData.apellidoMat}
                />
                <br />
                <br />
                <Numero
                    placeholder={"Celular"}
                    name={"celular"}
                    data={formData.celular}
                    change={handleChange}
                />
                <br />
                <br />
                <Email data={formData.email} change={handleChange} />
                <br />
                <br />
                <PasswordInput
                    placeholder={"Contraseña"}
                    data={formData.password}
                    change={handleChange}
                />
                <br />
                <br />
                <br />
                <BotonSubmit
                    boton={"listo"}/>
            </div>
        </form>
    );
};

export default Formulario;
