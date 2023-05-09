import { unstable_batchedUpdates } from "react-dom";
import Principal from "../Tienda/Componentes/Principal";
import FormFunction from "../../Funciones/Functionform";

const Reparaciones = () => {
  const progreso = document.getElementsByClassName('linea');
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
    const actives = document.getElementsByClassName('circulo active');
    progreso[0].style.width=((actives.length-1)/(circulos.length-1))*100 + '%';
    console.log(((actives.length-1)/(circulos.length-1))*100);
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
          <table class="default">
            <tr>
              <td>
              <br></br>
              <br></br>
              <div className="contenedor" >
              <div className="progreso-contenedor">
                <div className="linea"></div>
                <div id="1" className="circulo active">1</div>
                <div id="2" className="circulo">2</div>
                <div id="3" className="circulo">3</div>
                <div id="4" className="circulo">4</div>
                <div id="5" className="circulo">5</div>
              </div>
              <button color="orange" className="btn" id="anterior" onClick={anteriorf}>Anterior</button>
              <button color="orange" className="btn" id="siguiente" onClick={siguientef} >Siguiente</button>
             </div>
              </td>
              
              <td>
              <section class="form-register">
                <h4>Formulario Reparaciones</h4>
                <input class="controls" type="text" name="reparacion" id="reparacion" placeholder="Nombre Reparación"/>
                <input class="controls" type="text" name="descrip" id="descrip" placeholder="Descripcion"/>
                <input class="controls" type="text" name="fechas" id="fechas" placeholder="Fecha"/>
                <input class="controls" type="text" name="encargado" id="encargado" placeholder="Encargado"/>
              </section>
              </td>
            </tr>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparaciones