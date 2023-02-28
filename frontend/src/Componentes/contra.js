const Contra = (props) => {
    return(
        <input type="password" maxLength={"20"} minLength={"8"} required placeholder={props.placeholder} className={"inputs"} id={"password"} name={"password"} value={props.data} onChange={props.change}/>
    );
}

export default Contra