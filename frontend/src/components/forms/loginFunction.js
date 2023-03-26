import React, { useState } from 'react';
import { registerUser } from "./Register";

export function Functionform(){
    const [formData, setFormData] = useState({
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
    return {handleChange, handleSubmit, formData};
}
