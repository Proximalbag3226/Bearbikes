import React, { useState } from 'react';
import { registerUser } from "../Componentes/Register";

function Functionform(){
    const [formData, setFormData] = useState({
        nombre: "",
        apellido_pat: "",
        apellido_mat: "",
        numerocelular: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await registerUser(formData);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
}

export { Functionform };
