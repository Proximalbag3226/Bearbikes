import React from "react";
const Email = (props) => {
    return (

        <div>
            <label id={"label-email"} className={"label-email"} htmlFor={"email"}>{props.label}</label>
            <input id={"email"} name={"email"} type="email" className={"inputs input-email"} maxLength={"50"} minLength={"8"} required placeholder={props.placeholder} value={props.value} onChange={props.handleChange} />
        </div>
    );

}

export default Email
