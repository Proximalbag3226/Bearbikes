import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Principal() {

  function decodificado(){
    const token = localStorage.getItem("token");
    if  (token) {
      try{
        const tokenDecodificado = jwt_decode(token);
        console.log(tokenDecodificado);
        return tokenDecodificado;
      } catch (error) {
        console.error('El token no ha podido ser decodificado', error);
      }
    }
    return null;
  }
  const tokenDecodificado = decodificado();
  const username = tokenDecodificado?.name;
  const key = tokenDecodificado?.role;

  return (
    <div>
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
            <a href="prueba1/src/Componentes/Principal">Nosotros</a>
            <a href="src/componentes/Principal#">Contacto</a>
            {username ? (
              <a href="#">Bienvenido, {username}</a>
            ) : (
              <a href="#">Bienvenido, identifiquese</a>
            )}
            <a href={"/carrito"}>Carrito</a>
            {key === 'admin' ? (
                    <a href="/createtaller">Nuevo Taller</a>
                    ) : (
                      <></>
                )}
          </nav>
        </div>
      </header>
      <div className={"capa"}></div>
      <input type={"checkbox"} id={"btn-menu"} />
      <div className={"container-menu"}>
        <div className={"cont-menu"}>
          <nav>
            <a href={"/eleccion"}>Registro</a>
            <a href={"/login"}>Inicio de sesion</a>
            <a href={"/infot"}>Sitios turisticos</a>
            {key === '' ? (
            <a href={"/tienda"}>Tienda</a>
            ) : (
              <></>
              )}
            <a href={"/comercios"}>Comercios</a>
            <a href={"/nuevoscomercios"}>Nuevos Comercios</a>
            <a href={"/infob"}>Info bicicletas</a>
            <a href={"/tienda"}>Tienda bicicletas</a>
            <a href={"/talleres"}>Talleres</a>
            <a href={"/nuevostalleres"}>Nuevos Talleres</a>
            {key === 'admin' ? (
            <a href={"/reparaciones"}>Reparaciones</a>
            ) : (
              <></>
              )}
            <a href={"/rutas"}>Creador de rutas</a>
            <a href={"/avisos"}>Avisos</a>
            {key === 'admin' ? (
            <a href={"/gestion"}>Gestion</a>
            ) : (
              <></>
              )}
          </nav>
          <label htmlFor={"btn-menu"}>✖</label>
        </div>
      </div>
    </div>
  );
}

export default Principal;
