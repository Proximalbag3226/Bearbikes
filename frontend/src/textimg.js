function Textimg(props){
    return(
        <div id={props.idtext}>
            <p className={"texto1"}>{props.textotitulo}</p>
            <br/><br/>
            <p className={"texto0"}>{props.textotexto}</p>
            <br/>
            <img className={props.claseimg} src={require(`../src/IMG/bici-${props.imagen1}.jpg`)}/>
        </div>
    );
}

export default Textimg