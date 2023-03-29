const Boton = (props) => {
    return(
        <button className={"button-85"} role="button" type={"submit"} onClick={props.onClick}>{props.boton}</button>
    );
}

export default Boton