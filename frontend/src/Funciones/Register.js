import variables from "./constantes";

export const registerUser = (formData) => {
    return fetch(`http://192.168.20.110:${variables.apiPort}/${variables.registrar}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("token", data.token);
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

