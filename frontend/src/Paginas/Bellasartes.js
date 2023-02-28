import Principal from "../Componentes/Principal";
import Infos from "../Componentes/Infos"

const Bellasartes = () => {
    return(
        <div>
        <div>
            <Principal/>
        </div>
            <div>
                <Infos
                    lugar={"Bellas Artes"}
                    text={"El palacio de Bellas Artes es el recinto cultural ubicado en el centro de la Ciudad de Mexico. EN el albergan exhibiciones de arte y una variedad de eventos en vivo, que incluyen música, danza, teatro y ópera.La arquitectura del Palacio de Bellas Artes El Palacio de Bellas Artes abriga sobre todo, dos estilos arquitectónicos muy en boga a finales del siglo XIX y principios del XX: Art nouveau Art decó El exterior tiene un estilo marcadamente art nouveau y el interior tiene un estilo art decó."}
                    img1='bellasartes_1'
                    img2='bellasartes_2'
                    img3='bellasartes_3'/>
            </div>
        </div>
    );
}

export default Bellasartes