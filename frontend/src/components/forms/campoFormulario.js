const Inputs = (props) => {
    return (
        <div>
            <label id={"label-" + props.id} className={"label-" + props.type} htmlFor={props.id}>{props.label}</label>
            <input id={props.id} className={"inputs input-" + props.type} name={props.name} value={props.value} type={props.type} required placeholder={props.placeholder} onChange={props.handleChange} />
        </div>
    );

}

export default Inputs