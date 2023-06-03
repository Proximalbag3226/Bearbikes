import Textimg from "../Componentes/textimg";
const Inicio= () => {
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
		textotitulo={"¿Qué es el cicloturismo?"}
		textotexto={"El cicloturismo de alforjas es el ciclismo a largas distancias, una actividad recreativa y no competitiva que combina la actividad física y el turismo. Consiste en viajar en bicicleta visitando los lugares que se encuentra uno a su paso. Se realiza por placer, no por competición, por lo que no se puede llegar a denominar práctica competitiva."}
		imagen1={"ciclo"}/>
		<Textimg
		idtext={"descripcion"}
		claseimg={"repa1"}
		textotitulo={"¿Qué es Bear Bikes?"}
		textotexto={"En apoyo al cicloturismo, decidimos crear Bear Bikes. Bear Bikes es un proyecto destinado principalmente a los ciclistas de la Ciudad de México, ya que proporcionamos opciones de reparación de bicicletas, venta de artículos de bicicletas y un generador de rutas exclusivo para ciclistas. \n Jústo lo que tú y tu bicicleta necesita!"}
		imagen1={"rep"}/>
		<Textimg 
		idtext={"servicios"} 
		claseimg={"repa1"} 
		textotitulo={"¿Qué servicios ofrecemos?"} 
		textotexto={"Bear Bikes ofrece servicios especializados en la vida del ciclista, siendo: Creador de rutas, en el que tú marcas en un mapa tus puntos de salida y meta. Tienda de compra de refacciones donde eliges los productos, un visualizador de sitios turísticos, entre otros."} 
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