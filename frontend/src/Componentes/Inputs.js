

const Input = ({ label, styles, ...rest }) => {
    return (
        <div style={styles}>
            <input className={"inputs input-" + rest.type}  {...rest} />
            <br/><br/>
        </div>
    );
}

export const EmailInput = (props) => {
    return (
        <div>
            {
                Input({
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "Email",
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
                Input({
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Contraseña",
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
                Input({
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
                Input({
                    
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
                Input({
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
                Input({
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
                Input({
                    id: "name",
                    name: "name",
                    type: "text",
                    placeholder: "Nombre",
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
                Input({
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
                Input({
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
                Input({
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

export default Input;