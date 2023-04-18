import Menu from "../../common/menu";
import FormularioRegistro from "../../forms/register/registerForm";

const RegistroDueñoTaller = () => {
    return(
        <div>
        <div>
          <Menu/>
        </div>
        <div>
          <FormularioRegistro tipoUsuario="dueño_taller"/>
        </div>
      </div>
    );
}

export default RegistroDueñoTaller