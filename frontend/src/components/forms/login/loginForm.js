import FormFunction from './loginFormFunction';
import {EmailInput, PasswordInput, SubmitButton} from '../inputs/inputConLabel';


const FormularioLogin = () => {

    const formInitialData = new Map();
    formInitialData.set("email", "");
    formInitialData.set("password", "");

    const { formData, handleChange, handleSubmit } = FormFunction(formInitialData);
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={"titulo"}>Complete los campos</h1>
            <div className={"inputss"} id={"inputss"}>
                <br /><br /><br />
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

export default FormularioLogin;
