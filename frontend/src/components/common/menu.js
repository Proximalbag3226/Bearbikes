function Menu() {
    return (
        <div className="hide-overflow">
            <header className={"header"}>
                <div className={"container"}>
                    <div className={"btn-menu"}>
                        <label htmlFor={"btn-menu"}>☰</label>
                    </div>
                    <div className={"logo"}>
                        <h1>Bear Bikes</h1>
                    </div>
                    <nav className={"menu"}>
                        <a href="/">Inicio</a>
                        <a href="prueba1/src/Componentes/menu">Nosotros</a>
                        <a href="src/componentes/menu#">Contacto</a>
                    </nav>
                </div>
            </header>
            <div className={"capa"}></div>
            <input type={"checkbox"} id={"btn-menu"} />
            <div className={"container-menu"}>
                <div className={"cont-menu"}>
                    <nav className="menu-nav">
                        <a href={"/eleccion"}>Registro</a>
                        <a href={"/login"}>Inicio de sesion</a>
                        <a href={"/infot"}>Sitios turisticos</a>
                        <a href={"/tienda"}>Tienda</a>
                        <a href={"/form"}>Comercios</a>
                        <a href={"/infob"}>Info bicicletas</a>
                        <a href={"/tienda"}>Tienda bicicletas</a>
                        <a href={"/form"}>Talleres</a>
                        <a href={"/form"}>Reparaciones</a>
                        <a href={"/rutas"}>Creador de rutas</a>
                        <a href={"/avisos"}>Avisos</a>
                    </nav>
                    <label htmlFor={"btn-menu"}>✖</label>
                </div>
            </div>
        </div>
    );
}

export default Menu;