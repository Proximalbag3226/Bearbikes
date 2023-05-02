import { unstable_batchedUpdates } from "react-dom";
import Principal from "../Tienda/Componentes/Principal";

const Reparaciones = () => {
  const progreso = document.getElementById('progreso');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');
  const circulos = document.getElementsByClassName('circulo');
  let currentActive = 2; //agregaruna variable que cambie el numero conforme a lo guardado en la base de datos

  console.log(circulos)
  function siguientef() {
    
    if (currentActive === circulos.length+1) 
      return
    
    console.log('siguiente')
    currentActive++;
    console.log(currentActive);
    update();
  }
  function anteriorf() {

    if (currentActive == 2)
      return;
    console.log('anterior')
    currentActive--;
    update();
  }

  function update() {

    for (let i = 1; i < circulos.length; i++) {
      console.log('id ' + circulos[i].id)
      if (circulos[i].id < currentActive) {
        circulos[i].className = 'circulo active';
      } else {
        circulos[i].className = 'circulo';
      }
    }
  }
  return (
    <div>
      <div>
        <Principal />
      </div>
      <div>
        <div>
          <h2 className="titulo">Reparaciones</h2>
          <div className="reparacioninicio">
            <div className="conetendor" >
              <div className="progreso-contenedor">
                <div id="1" className="circulo active">1</div>
                <div id="2" className="circulo">2</div>
                <div id="3" className="circulo">3</div>
                <div id="4" className="circulo">4</div>
                <div id="5" className="circulo">5</div>
              </div>
              <button className="btn" id="anterior" onClick={anteriorf}>Anterior</button>
              <button className="btn" id="siguiente" onClick={siguientef} >Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparaciones