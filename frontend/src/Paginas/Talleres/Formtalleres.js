import Principal from "../../Componentes/Principal";
import Formulario from "../../Modificados/Formc";

const Formtalleres = () => {
    return(
        <div>
        <div>
          <Principal/>
        </div>
        <div>
          <Formulario tipoUsuario="nuevo_taller"/>
        </div>
      </div>
    );
}

export default Formtalleres