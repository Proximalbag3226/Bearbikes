function Aviso(){
    return(
         <div>
            <center>
            <div className="textito">
                <p style={{color: "white", textAlign: "center", fontSize: "40px", fontFamily: 'Oranienbaum',}}>{props.titulo}</p>
                <br/><br/>
                <p className="textito1" style={{color: "white", lineHeight: "39px", fontSize: "25px",}}>{props.text}</p>
            </div>
            </center>
        </div>
    );
}

export default Aviso;