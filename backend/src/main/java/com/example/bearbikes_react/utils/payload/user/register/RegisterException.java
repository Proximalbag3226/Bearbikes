package com.example.bearbikes_react.utils.payload.user.register;

public class RegisterException extends Exception {
    public RegisterException(String customMessage) {
        super(customMessage);
    }

    public RegisterException(String customMessage, Throwable cause) {
        super(customMessage, cause);
    }

    @Override
    public String toString() {
        String mensajeMostrar = super.getMessage() == null ? "NADA PARA MOSTRAR" : super.getMessage();
        String causa = super.getCause() == null ? "SIN CAUSA" : super.getCause().getMessage();
        return
                """
                        Error a mostrar usuario => $mostrar
                        Causa de la excepción   => $causa
                        """
                        .replace("$mostrar", mensajeMostrar)
                        .replace("$causa", causa)
                ;
    }

}
