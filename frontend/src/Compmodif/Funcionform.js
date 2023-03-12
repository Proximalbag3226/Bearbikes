import {useState} from "@types/react";

const Funcionform = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://192.168.20.110:9009/ciclistas/register", {
            //La direccion del fecht se cambia por que me de el pendejo del brandon
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
};

export default Funcionform;