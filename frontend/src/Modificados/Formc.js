import  FormFunction  from '../Funciones/Functionform';
import {
    EmailInput,
    PasswordInput,
    SubmitButton,
    CelularInput,
    ApellidoMatInput,
    ApellidoPatInput,
    NombreInput,
    AdminKeyInput,
    RfcPersonaFisicaInput,
    DireccionInput,
} from '../Componentes/Inputs';

const Formulario = (props) => {
    const tipoUsuario = props.tipoUsuario;
    console.log("tipoUsuario: ", tipoUsuario);

    const formInitialData = new Map();
    formInitialData.set("type", tipoUsuario);
    formInitialData.set("email", "");
    formInitialData.set("password", "");

    switch (tipoUsuario) {
        case "ciclista":
            formInitialData.set("apellidoPat", "");
            formInitialData.set("name", "");
            formInitialData.set("apellidoMat", "");
            formInitialData.set("celular", "");
            break;
        case "dueño_taller":
        // intentionally left blank
        case "dueño_comercio":
            formInitialData.set("apellidoPat", "");
            formInitialData.set("name", "");
            formInitialData.set("apellidoMat", "");
            formInitialData.set("celular", "");
            formInitialData.set("rfc", "");
            break;
        case "administrador":
            formInitialData.set("name", "");
            formInitialData.set("adminKey", "");
            break;

        case "nuevo_taller":
            formInitialData.set("name" , "");
            formInitialData.set("celular", "");
            formInitialData.set("rfc", "");
            formInitialData.set("direccion", "");
            formInitialData.set("imagen", "")
            break;
    }

    const { formData, handleChange, handleSubmit } = FormFunction(formInitialData);
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br />
                <br />
                <br />
                <RfcPersonaFisicaInput
                    value={formData.rfc}
                    handleChange={handleChange}
                    styles={
                        { display: (tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio" || tipoUsuario === "nuevo_taller" || tipoUsuario === "nuevo_comercio") ? "block" : "none" }
                    }
                />

                <AdminKeyInput
                    value={formData.adminKey}
                    handleChange={handleChange}
                    styles={
                        { display: tipoUsuario === "administrador" ? "block" : "none" }
                    }
                />
                <NombreInput
                    value={formData.name}
                    handleChange={handleChange}
                />
                <ApellidoPatInput
                    value={formData.apellidoPat}
                    handleChange={handleChange}
                    styles={
                        {
                            display: (tipoUsuario === "ciclista" || tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio")
                                ? "block" : "none"
                        }
                    }
                />
                <ApellidoMatInput
                    value={formData.apellidoMat}
                    handleChange={handleChange}
                    styles={
                        {
                            display: (tipoUsuario === "ciclista" || tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio")
                                ? "block" : "none"
                        }
                    }
                />
                <CelularInput
                    data={formData.celular}
                    handleChange={handleChange}
                    styles={
                        {
                            display: (tipoUsuario === "ciclista" || tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio" || tipoUsuario === "nuevo_taller" || tipoUsuario === "nuevo_comercio")
                                ? "block" : "none"
                        }
                    }
                />
                <DireccionInput
                    data={formData.direccion}
                    handleChange={handleChange}
                    styles={
                        {
                            display: (tipoUsuario === "nuevo_taller" || tipoUsuario === "nuevo_comercio")
                                ? "block" : "none"
                        }
                    }
                />
                <EmailInput
                    value={formData.email}
                    handleChange={handleChange} />
                <PasswordInput
                    value={formData.password}
                    handleChange={handleChange}
                />
                <SubmitButton text={"Registrar"}/>
            </div>
        </form>
    );
};

export default Formulario;
