import { Functionform } from './Functionform';
import Inputs from "../Componentes/Campos";
import Contra from "../Componentes/contra";

function Inicios(){
    const { formData, handleChange, handleSubmit } = Functionform();
    return(
        <form onSubmit={handleSubmit}>  
        <h1 className={"titulo"}>Complete los campos</h1>
        <div className={"inputss"} id={"inputss"}>
            <br />
            <Inputs
                handleChange={handleChange}
                placeholder={"Correo"}
                idt={"email"}
                name={"email"}
                value={formData.email}
            />
            <br/>
            <br/>
            <Contra
                    placeholder={"Contraseña"}
                    data={formData.password}
                    change={handleChange}
                />
        </div>
    </form>
    );
}

export default Inicios;