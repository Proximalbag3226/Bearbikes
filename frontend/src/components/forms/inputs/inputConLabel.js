

const InputConLabel = ({ label, styles, ...rest }) => {
    return (
        <div style={styles}>
            <label className={"label-" + rest.type} htmlFor={rest.id}>
                {label}
            </label>
            <input className={"inputs input-" + rest.type}  {...rest} />
            <br/><br/>
        </div>
    );
}

export const EmailInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Email",
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "user@domain.com",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: "30",
                    minLength: "5",
                })
            }
        </div>
    );
}

export const PasswordInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Contraseña",
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "tu contraseña",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: "20",
                    minLength: "8",
                })
            }
        </div>
    );
}

export const SubmitButton = (props) => {
    return (
        <div>
            <button type="submit" className="button-85 submit" role="button">
                {props.text}
            </button>
        </div>
    );
}

export const CelularInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "celular",
                    id: "celular",
                    name: "celular",
                    type: "tel",
                    placeholder: "5533175289",
                    value: props.value,
                    onChange: props.handleChange,
                    maxLength: "10",
                    minLength: props.minLength || "1",
                    pattern: "[0-9]{1,10}",
                    styles: props.styles
                })
            }
        </div>

    );
}
export const TextInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: props.label,
                    id: props.id,
                    name: props.id,
                    type: "text",
                    placeholder: props.placeholder,
                    value: props.value,
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }
        </div>

    );
}

export const ApellidoMatInput = (props) => {
    return (

        <div>
            {
                InputConLabel({
                    label: "Apellido Materno",
                    id: "apellidoMat",
                    name: "apellidoMat",
                    type: "text",
                    placeholder: "ej. Ramirez",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }
        </div>

    );
}

export const ApellidoPatInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Apellido Paterno",
                    id: "apellidoPat",
                    name: "apellidoPat",
                    type: "text",
                    placeholder: "ej. Perez",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }
        </div>
        

    );
}

export const NombreInput = (props) => {
    return (
        
        <div>
            {
                InputConLabel({
                    label: "Nombre(s)",
                    id: "name",
                    name: "name",
                    type: "text",
                    placeholder: "ej. Juan",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }
        </div>
        
    );
}

export const AdminKeyInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Llave de administrador",
                    id: "adminKey",
                    name: "adminKey",
                    type: "text",
                    placeholder: "ej. AdminKey1234",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }
        </div>
        
    );
}

export const TypeHiddenInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Type",
                    id: "type",
                    name: "type",
                    type: "text",
                    value: props.value || "",
                    onChange: props.handleChange,
                    styles: {display: 'none'}
                })
            }
        </div>
        
    );
}
export const RfcPersonaFisicaInput = (props) => {
    return (
        <div>
            {
                InputConLabel({
                    label: "Rfc Personal",
                    id: "rfc",
                    name: "rfc",
                    type: "text",
                    placeholder: "ej. RFCPRUEBA123",
                    value: props.value || "",
                    onChange: props.handleChange,
                    maxLength: props.maxLength || "",
                    minLength: props.minLength || "",
                    styles: props.styles
                })
            }            
        </div>
        
    );
}

export default InputConLabel;