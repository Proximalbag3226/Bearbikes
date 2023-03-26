import Menu from "../common/menu";
import FormularioRegistro from "../forms/register/registerForm";

const Ciclistasf = () => {
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

export default Ciclistasf