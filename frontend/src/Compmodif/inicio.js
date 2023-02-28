import Textimg from "../textimg";
const Inicio= (props) => {
    return(
        <div>
        <p class="tituloinicio">BeardBikes</p>
		<br/><br/><br/>
		<Textimg
		idtext={"ciclo1"}
		claseimg={"cicloimg"}
		textotitulo={"¿Que es el cicloturismo?"}
		textotexto={"El cicloturismo de alforjas es el ciclismo a largas distancias, una actividad recreativa y no competitiva que combina la actividad física y el turismo. Consiste en viajar en bicicleta visitando los lugares que se encuentra uno a su paso. Se realiza por placer, no por competición, por lo que no se puede llegar a denominar práctica competitiva."}
		imagen1={"ciclo"}/>
		<Textimg
		idtext={"descripcion"}
		claseimg={"repa1"}
		textotitulo={"¿Que es BeradBikes?"}
		textotexto={"BeardBikes es un proyecto destinado a los ciclistas de la ciudad de Mexico, ya que proporcionamos opciones de reapracion de bicicletas,venta de articulos de bicicletas y un generador de rutas exclusivo para ciclistas."}
		imagen1={"rep"}/>
        </div>
    );
}

export default Inicio