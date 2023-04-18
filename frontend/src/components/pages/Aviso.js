
function Aviso(props){
    return(
         <div>
            <div className="divaviso">
                <p style={{color: "white", textAlign: "center", fontSize: "40px", fontFamily: 'Arial',}}>{props.titulo}</p>
                <p style={{color: "white", textAlign: "right", fontSize: "22px", fontFamily: "Times New Roman",}}>{props.fecha}</p>
                <p className="textoaviso" style={{color: "white", lineHeight: "39px", fontSize: "25px",}}>{props.text}</p>
            </div>
        </div>
    );
}

export default Aviso;