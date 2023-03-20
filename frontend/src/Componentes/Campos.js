const Inputs = (props) => {
    return(
        <input type="text" required placeholder={props.placeholder} className={"inputs"} name={props.name} id={props.idt} value={props.value} onChange={props.handleChange}/>
    );

}

export default Inputs