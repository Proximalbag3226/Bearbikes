import '../CSS/index.css'

export function Infos(props){
    return (
        <div>
            <div className="textito">
                <p style={{color: "white",
                    textAlign: "center",
                    fontSize: "40px",
                    fontFamily: 'Oranienbaum',}}>{props.lugar}</p>
                <br/><br/>
                <p className="textito1" style={{color: "white",
                    lineHeight: "39px",
                    fontSize: "25px",}}>{props.text}</p>
            </div>
            <div className="imagenes">
                <figure>
                    <img src={require(`../IMG/${props.img1}.jpg`)}/>
                    <br/><br/><br/><br/>
                    <img src={require(`../IMG/${props.img2}.jpg`)}/>
                    <br/><br/><br/><br/><br/>
                    <img src={require(`../IMG/${props.img3}.jpg`)}/>
                </figure>
            </div>
        </div>
    );
}

export default Infos