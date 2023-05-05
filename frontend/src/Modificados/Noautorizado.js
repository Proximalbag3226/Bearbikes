import Principal from "../Componentes/Principal";

function Noautorizado(){
    return(
    <div>
        <div>
            <Principal/>
        </div>
        <div>
            <h1 className="titulo">No estas autorizado para acceder a esta pagina</h1>
        </div>
    </div>
    )
}

export default Noautorizado