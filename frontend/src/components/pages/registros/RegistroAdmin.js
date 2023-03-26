import Menu from "../../common/menu";
import FormularioRegistro from "../../forms/register/registerForm";

const RegistroAdmin = () => {
    return(
        <div>
        <div>
          <Menu/>
        </div>
        <div>
          <FormularioRegistro tipoUsuario="admin"/>
        </div>
      </div>
    );
}

export default RegistroAdmin