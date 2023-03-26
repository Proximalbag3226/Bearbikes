

const InputConLabel = ({ label, ...rest }) => {
    return (
        <div>
            <label className={"label-" + rest.type} htmlFor={rest.id}>
                {label}
            </label>
            <input className={"inputs input-" + rest.type} required {...rest} />
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
                    value: props.value,
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
                    value: props.value,
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

export const NumberInput = (props) => {
    return(
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
                pattern : "[0-9]{1,10}"
            })
        }
    </div>
        
    );
}
export const TextInput = (props) => {
    return(
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
                maxLength: props.maxLength|| "",
                minLength: props.minLength || ""
            })
        }
    </div>
        
    );
}


export default InputConLabel;