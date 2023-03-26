function TextImg(props){
    return(
        <div id={props.idtext}>
            <p className={"texto1"}>{props.textotitulo}</p>
            <br/><br/>
            <p className={"texto0"}>{props.textotexto}</p>
            <br/>
            <img className={props.claseimg} src={require(`./../../assets/img/info/bici-${props.imagen1}.jpg`)}/>
        </div>
    );
}

export default TextImg