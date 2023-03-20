import { Functionform } from './Functionform';
import Inputs from "../Componentes/Campos";
import Boton from "../Componentes/botonr";
import Contra from "../Componentes/contra";
import Email from "../Componentes/email";
import Numero from "../Componentes/numero";
const Formulario = () => {
    const { formData, handleChange, handleSubmit } = Functionform();
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
