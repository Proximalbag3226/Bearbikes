import Principal from "../Tienda/Componentes/Principal";

const Reparaciones = () => {
    const progreso=document.getElementById('progreso');
    const porcentaje=document.getElementById('porcentaje');
    let cantidad 
    return(
        <div>
          <div>
            <Principal/>
          </div>
          <div>
            <div>
                <h2 className="titulo">Reparaciones</h2>
                <div></div>
            </div>
          </div>
        </div>
    );
}

export default Reparaciones