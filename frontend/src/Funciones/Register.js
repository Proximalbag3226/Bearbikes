import variables from "./constantes";

export const registerUser = (formData) => {
    return fetch(`http://${variables.apiHost}:${variables.apiPort}/${variables.registrar}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const loginUser = (formData) => {
    return fetch(`http://${variables.apiHost}:${variables.apiPort}/${variables.registrar}/auth/authenticate`, {
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

