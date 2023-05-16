import React, { useState } from 'react';
import { registerUser } from "./Register";
import { loginUser } from './Register';
import { redirect } from "react-router-dom";

function FormFunction(formValues){
    console.log("formValues: ", formValues);
    const [formData, setFormData] = useState({
        ...formValues
    });

    const handleChange = (event) => {

        console.log("formData before: ", formData);
        
     console.log("event name and value: ", event.target.name, + " " +event.target.value);
        
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
            const data = await registerUser(formDataWithUserType);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return {handleChange, handleSubmit, formData};
}

export function Formlogin(formValues){
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
            const data = await loginUser(formData);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
        return redirect("/");
    };
    return {handleChange, handleSubmit, formData};
}



export default FormFunction;
