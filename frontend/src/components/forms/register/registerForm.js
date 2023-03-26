import FormFunction from './formFunction';
import {
    EmailInput,
    PasswordInput,
    SubmitButton,
    NumberInput,
    TextInput
} from '../inputs/inputConLabel';


const FormularioRegistro = (props) => {

    switch (props.tipoUsuario) {
        case "ciclista":
            console.log("registro de ciclista");
            break;
        case "administrador":
            console.log("registro de administrador");
            break;
        case "dueño_taller":
            console.log("registro de dueño_taller");
            break
        case "dueño_comercio":
            console.log("registro de dueño_comercio");
            break;
    }

    let formInitialData = {
        type: props.tipoUsuario,
        name: "",
        apellidoPat: "",
        apellidoMat: "",
        celular: "",
        email: "",
        password: "",
    }

    const { formData, handleChange, handleSubmit } = FormFunction(formInitialData);
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br /><br /><br />
                <TextInput
                    label={"Nombre"}
                    id={"name"}
                    placeholder={"Nombre"}
                    value={formData.name}
                    handleChange={handleChange}
                />
                <br /><br />
                <TextInput
                    label={"Apellido Paterno"}
                    id={"apellidoPat"}
                    placeholder={"Tu apellido paterno"}
                    value={formData.apellidoPat}
                    handleChange={handleChange}
                />
                <br /><br />
                <TextInput
                    label={"Apellido Materno"}
                    id={"apellidoMat"}
                    placeholder={"Tu apellido materno"}
                    value={formData.apellidoMat}
                    handleChange={handleChange}
                />
                <br /><br />
                <NumberInput
                    data={formData.celular}
                    handleChange={handleChange}
                />
                <br /><br />
                <EmailInput
                    value={formData.email}
                    handleChange={handleChange} />
                <br /><br />
                <PasswordInput
                    value={formData.password}
                    handleChange={handleChange}
                />
                <br /><br /><br />
                <SubmitButton
                    text={"Registrar"} />
            </div>
        </form>
    );
};

export default FormularioRegistro;
