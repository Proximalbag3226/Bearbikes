import React, { useState } from 'react';
import AuthRequest from "./authRequests";

function FormFunction(formValues){
    const [formData, setFormData] = useState({
        ...formValues
    });

    const handleChange = (event) => {
        
    console.log("event name and value: ", event.target.name, + " " +event.target.value);
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
            
        });
    };

     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await AuthRequest(formData);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return {handleChange, handleSubmit, formData};
}

export default FormFunction;
