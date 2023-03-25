import React from "react";
const Numero = (props) => {
    return(
        <input type={"tel"} required placeholder={props.placeholder} className={"inputs"} id={"telefono"} name={props.name} value={props.value} onChange={props.change}/>
    );
}

export default Numero