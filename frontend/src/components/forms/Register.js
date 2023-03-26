import {dominioApi, auth} from "../../configs/constants";

export const registerUser = (formData) => {
    return fetch(`http://${dominioApi}/${auth.endpoint_registro}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            console.log("Success:", data);
            localStorage.setItem("token", data.token);
            return data;
        })
        .catch((error) => {
            alert(error);
            console.error("Error:", error);
        });
};
