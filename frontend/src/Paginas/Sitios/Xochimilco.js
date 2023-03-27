import Principal from "../../Componentes/Principal";
import Infos from "../../Componentes/Infos"

const Xochimilco = () => {
    return(
        <div>
            <div>
                <Principal/>
            </div>
            <div>
                <Infos
                    lugar={"Xochimilco"}
                    text={"El lago de Xochimilco es uno de los lagos que forma a la cuenca lacustre del valle de Mexico, ubica en la Alcaldia Xochimilco- La principal actividad para hacer en Xochimilco es pasear por los canales en trajinera. Es uno de los tres cuerpos acuíferos del antiguo Valle de México. Es hábitat de múltiples especies, fuente de oxígeno y recursos naturales en la Ciudad de México y un importante centro turístico y cultural. El lago comparte lugar con la leyenda de la Isla de las Muñecas."}
                    img1='xochimilco_1'
                    img2='xochimilco_2'
                    img3='xochimilco_3'/>
            </div>
        </div>
    );
}

export default Xochimilco