import Menu from "../../common/menu";
import Infos from "./Infos";

const Torre = () => {
    return(
        <div>
            <div>
                <Menu/>
            </div>
            <div>
                <Infos
                    lugar={"Torre Latinoamericana"}
                    text={"La torre Latinoamericana es el rascacielos ubicado en el centro de la Ciudad de Mexico. La construcción abarcó de 1948 a 1956. Fue el edificio más alto de la ciudad de México desde su construcción en 1956 hasta 1972. En él puedes subir al Mirador, tomar un cafe o bebidas alcoholicas, comer e ir a los museos del Bicentenario y de la Ciudad de Mexico."}
                    img1='torre_1'
                    img2='torre_2'
                    img3='torre_3'/>
            </div>
        </div>
    );
}

export default Torre