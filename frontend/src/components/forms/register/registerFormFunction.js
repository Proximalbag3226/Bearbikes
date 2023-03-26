import React, { useState } from 'react';
import {RegisterRequest} from "../authRequests";

function FormFunction(formValues){
    console.log("formValues: ", formValues);
    const [formData, setFormData] = useState({
        ...formValues
    });

    const handleChange = (event) => {

        console.log("formData before: ", formData);
        
    // console.log("event name and value: ", event.target.name, + " " +event.target.value);
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        
        console.log("formData after: ", formData);
    };

     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formDataWithUserType = {...formData, type: formValues.get('type')}; // añade el tipo de usuario al objeto formData
            console.log("formData submit: ", formData);
            const data = await RegisterRequest(formDataWithUserType);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return {handleChange, handleSubmit, formData};
}

export default FormFunction;
