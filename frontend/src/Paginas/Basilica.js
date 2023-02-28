import Principal from "../Componentes/Principal";
import Infos from "../Componentes/Infos"

const Basilica = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Infos
                    lugar={"Basilica"}
                    text={" Basílica de Guadalupe Ciudad de México llamado oficialmente Insigne Nacional Basílica de Santa María de Guadalupe, es el principal recinto católico de América y uno de los más visitados en el mundo. Es un recinto católico conformado por varias iglesias y edificios, dedicado a la virgen María en su advocación de Guadalupe se localiza al pie del Cerro del Tepeyac."}
                    img1='basilica_1'
                    img2='basilica_2'
                    img3='basilica_3'/>
            </div>
        </div>
    );
}

export default Basilica