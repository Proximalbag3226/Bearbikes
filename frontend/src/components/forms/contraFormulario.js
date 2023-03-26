const PasswordInput = (props) => {
    return(
        <div>
            <label id={"label-password"} className={"label-password"} htmlFor={"password"}>{props.label}</label>
            <input id={"password"} name={"password"} type="password" className={"inputs input-password"} maxLength={"20"} minLength={"8"} required placeholder={props.placeholder}  value={props.value} onChange={props.handleChange}/>
        </div>
    );
}

export default PasswordInput