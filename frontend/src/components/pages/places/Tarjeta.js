import '../../../assets/css/Tarjetas.css';

export function Tarjeta(props) {
    return (
        <div className={"img img-tarjeta"}>
            <div className={"contenedor"}>
                <figure>
                    <img src={require(`../../../assets/img/info-${props.imagen}.jpg`)}/>
                    <div className={"capita"}>
                        <br/><br/>
                        <a href={props.href}>{props.lugar}</a>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default Tarjeta