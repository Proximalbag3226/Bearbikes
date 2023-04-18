import Principal from "../../Componentes/Principal";
import Formulario from "../../Modificados/Formc";

const Dueño_comercio = () => {
    return(
        <div>
        <div>
          <Principal/>
        </div>
        <div>
          <Formulario tipoUsuario={"dueño_comercio"}/>
        </div>
      </div>
    );
}

export default Dueño_comercio