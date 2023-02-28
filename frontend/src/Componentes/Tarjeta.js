import '../CSS/Tarjetas.css';

export function Tarjeta(props) {
    return (
        <div className={"img"}>
            <div className={"contenedor"}>
                <figure>
                    <img src={require(`../IMG/info-${props.imagen}.jpg`)}/>
                    <div className={"capita"}>
                        <br/><br/><br/><br/>
                        <a href={props.href}>{props.lugar}</a>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default Tarjeta