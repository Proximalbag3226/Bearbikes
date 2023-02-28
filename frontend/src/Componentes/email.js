import React from "react";
const Email = (props) => {
    return(
        <input type={"email"} maxLength={"50"} minLength={"8"} placeholder={"Email"} className={"inputs"} id={"email"} name={"email"} value={props.data} onChange={props.change}/>
    );

}

export default Email
