import React from 'react';
import { redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';

const withAuthorization = (WrappedComponent, allowedUserTypes) => {
  return class extends React.Component {
    render() {
      const userType = () => {
        const token = localStorage.getItem('token');
        if(!token){
          return null;
        }
        try{
        const decode = jwtDecode(token)
        console.log(decode.userType)
        return decode.userType;
        }
        catch(err){
          console.error("Error al decodificar el token", err);
          return null;
        }
      };
      if (!allowedUserTypes.includes(userType)) {
        // Si el usuario no tiene permiso, lo redirigimos a una página de error
        return redirect('/no');
      }
      // Si el usuario tiene permiso, mostramos el componente
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuthorization;
