import Menu from "../../common/menu";
import FormularioRegistro from "../../forms/register/registerForm";

const RegistroCiclista = () => {
    return(
        <div>
        <div>
          <Menu/>
        </div>
        <div>
          <FormularioRegistro tipoUsuario="ciclista"/>
        </div>
      </div>
    );
}

export default RegistroCiclista