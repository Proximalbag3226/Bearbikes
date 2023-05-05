import { HistoryRouterProps } from 'react-router-dom';

const Boton = (props) => {

    const history = HistoryRouterProps();

    const handleClick = () => {
        history.push(props.url)
    }

    return(
        <button className={"button-85"} role="button" type={"submit"} onClick={props.onClick}>{props.boton}</button>
    );
}

export default Boton