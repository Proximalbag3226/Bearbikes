import Principal from "../../Componentes/Principal";
import Formulario from "../../Modificados/Formc";

const Dueño_taller = () => {
    return(
        <div>
        <div>
          <Principal/>
        </div>
        <div>
          <Formulario tipoUsuario={"dueño_taller"}/>
        </div>
      </div>
    );
}

export default Dueño_taller