import variables from "../Compmodif/constantes";

export const registerUser = (formData) => {
    return fetch(`http://${variables.ipApi}/${variables.registrar}`, {
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
