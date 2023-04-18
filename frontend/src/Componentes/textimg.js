function TextImg(props){
    return(
        <div id={props.idtext}>
            <p className={"texto1"}>{props.textotitulo}</p>
            <br/><br/>
            <p className={"texto0"}>{props.textotexto}</p>
            <br/>
<<<<<<<< HEAD:frontend/src/Componentes/textimg.js
            <img className={props.claseimg} src={require(`../IMG/bici-${props.imagen1}.jpg`)}/>
========
            <img className={props.claseimg} src={require(`./../../assets/img/info/bici-${props.imagen1}.jpg`)}/>
>>>>>>>> d874d0c9e8538cb65aa9debf3e7865728fd378d4:frontend/src/components/common/imgWithDescription.js
        </div>
    );
}

export default TextImg