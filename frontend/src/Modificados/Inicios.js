import { Formlogin } from '../Funciones/Functionform';
import {
    EmailInput,
    PasswordInput,
    SubmitButton,
} from '../Componentes/Inputs';

function Inicios(){
    const formInitialData = new Map();
    formInitialData.set("type", "");
    formInitialData.set("email", "");
    formInitialData.set("password", "");
    const { formData, handleChange, handleSubmit } = Formlogin(formInitialData);
    
    return(
        <form onSubmit={handleSubmit}>  
        <h1 className={"titulo"}>Complete los campos</h1>
        <div className={"inputss"} id={"inputss"}>
            <br/>
            <EmailInput
                    value={formData.email}
                    handleChange={handleChange} />
                <PasswordInput
                    value={formData.password}
                    handleChange={handleChange}
                />
                <SubmitButton text={"Iniciar Sesion"}/>
        </div>
    </form>
    );
}

export default Inicios;