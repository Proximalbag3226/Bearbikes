import Principal from "../../Componentes/Principal";
import Formulario from "../../Modificados/Formc";

const Admin = () => {
    return(
        <div>
        <div>
          <Principal/>
        </div>
        <div>
          <Formulario tipoUsuario={"admin"}/>
        </div>
      </div>
    );
}

export default Admin;   