import Principal from "../Tienda/Componentes/Principal";
import { useState } from "react";
import Boton from "../../Componentes/botonr";
function Reparaciones(){
  const llave = 'admin';
  const [formData, setFormData] = useState({
    nombre_reparacion: "",
    descrip: "",
    fechas: "",
    encargado: "",
    currentActive: 1,
  });

  const handleChange= (event)=>{
    
    console.log("event name and value: ", event.target.name, + " " +event.target.value);
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch("http://192.168.20.110:9009/reparaciones/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("token", data.token);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

  const progreso = document.getElementsByClassName('linea');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');
  const circulos = document.getElementsByClassName('circulo');
  let currentActive = 2;
 //agregaruna variable que cambie el numero conforme a lo guardado en la base de datos

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
    console.log("numero actual", currentActive-1);

    formData.currentActive=currentActive-1;

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
              <button color="orange" className="btn" id="anterior" onClick={anteriorf} onChange={handleChange}>Anterior</button>
              <button color="orange" className="btn" id="siguiente" onClick={siguientef} onChange={handleChange}>Siguiente</button>
             </div>
              </td>
                {llave === 'admin' ? (
              <td>
              <form class="form-register" onSubmit={handleSubmit}>
                <h4>Formulario Reparaciones</h4>
                <input className="controls" type="text" name="nombre_reparacion" id="nombre_reparacion" placeholder="Nombre Reparación" onChange={handleChange} value={formData.nombre_reparacion}/>
                <input className="controls" type="text" name="descrip" id="descrip" placeholder="Descripcion" onChange={handleChange} value={formData.descrip}/>
                <input className="controls" type="text" name="fechas" id="fechas" placeholder="Fecha" onChange={handleChange} value={formData.fechas}/>
                <input className="controls" type="text" name="encargado" id="encargado" placeholder="Encargado" onChange={handleChange} value={formData.encargado}/>
                <Boton
                boton={"Registrar reparacion"}/>
              </form>
              </td>
                    ) : (
                    <></>
                )}
            </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparaciones