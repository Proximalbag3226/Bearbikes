import React, { useState } from 'react';
import {LoginRequest} from "../authRequests";

function FormFunction(formValues){
    console.log("formValues: ", formValues);
    const [formData, setFormData] = useState({
        ...formValues
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
            const data = await LoginRequest(formData);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return {handleChange, handleSubmit, formData};
}

export default FormFunction;
