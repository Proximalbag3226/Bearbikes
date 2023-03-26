import FormFunction from './formFunction';
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
    
} from '../inputs/inputConLabel';


const FormularioRegistro = (props) => {
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
    }

    // console.log('dueño_taller o dueño_comercio ' ,(tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio"));
    // console.log('administrador ' ,tipoUsuario === "administrador");
    // console.log('ciclista ' ,tipoUsuario === "ciclista");
    // console.log('dueño_taller, dueño_comercio o ciclista ' ,(tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio" || tipoUsuario === "ciclista"));


    const { formData, handleChange, handleSubmit } = FormFunction(formInitialData);
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br /><br /><br />

                <RfcPersonaFisicaInput
                    value={formData.rfc}
                    handleChange={handleChange}
                    styles={
                        { display: (tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio") ? "block" : "none" }
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
                <br /><br />
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
                <br /><br />
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
                <br /><br />
                <CelularInput
                    data={formData.celular}
                    handleChange={handleChange}
                    styles={
                        {
                            display: (tipoUsuario === "ciclista" || tipoUsuario === "dueño_taller" || tipoUsuario === "dueño_comercio")
                                ? "block" : "none"
                        }
                    }
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
