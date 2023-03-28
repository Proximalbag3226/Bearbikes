import Menu from "../../common/menu";
import FormularioRegistro from "../../forms/register/registerForm";

const RegistroDueñoComercio = () => {
    return(
        <div>
        <div>
          <Menu/>
        </div>
        <div>
          <FormularioRegistro tipoUsuario="dueño_comercio"/>
        </div>
      </div>
    );
}

export default RegistroDueñoComercio