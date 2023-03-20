import Textimg from "../textimg";
const Inicio= (props) => {
    return(
        <div>
			<br/><center>
        <p class="tituloinicio">Bear Bikes</p>
		</center>
		<br/><br/>
		<center>
		<Textimg
		idtext={"ciclo1"}
		claseimg={"cicloimg"}
		textotitulo={"¿Que es el cicloturismo?"}
		textotexto={"El cicloturismo de alforjas es el ciclismo a largas distancias, una actividad recreativa y no competitiva que combina la actividad física y el turismo. Consiste en viajar en bicicleta visitando los lugares que se encuentra uno a su paso. Se realiza por placer, no por competición, por lo que no se puede llegar a denominar práctica competitiva."}
		imagen1={"ciclo"}/>
		<Textimg
		idtext={"descripcion"}
		claseimg={"repa1"}
		textotitulo={"¿Que es Bear Bikes?"}
		textotexto={"Bear Bikes es un proyecto destinado a los ciclistas de la ciudad de Mexico, ya que proporcionamos opciones de reapracion de bicicletas,venta de articulos de bicicletas y un generador de rutas exclusivo para ciclistas."}
		imagen1={"rep"}/>
		<Textimg 
		idtext={"servicios"} 
		claseimg={"repa1"} 
		textotitulo={"¿Que servicios ofrecemos?"} 
		textotexto={"Bear Bikes ofrece servicios especializados en la vida del ciclista, siendo un creador de rutas, un tienda de compra de refacciones, un visualizador de sitios turisticos, entre otros."} 
		imagen1={"ser"}/>
		</center>
		<div style={{width:"100%"}} class={"enlaces"}>
			<p style={{textAlign:"center", color:'white', fontSize:'30px', padding:'10px'}}>
				Todos los derechos reservados© 2023
			</p>
		</div>
        </div>
    );
}

export default Inicio