import { dominioApi, auth } from "../../configs/constants";

export async function RegisterRequest(formData) {
    var data;
    try {
        const response = await fetch(`http://${dominioApi}/${auth.endpoint_registro}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        data = await response.json();
        alert(data.message);
        console.log("Response:", data);
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        alert(data.message);
        console.error("Error:", error);
    }
}

export async function LoginRequest(formData) {
    var data;
    try {
        const response = await fetch(`http://${dominioApi}/${auth.endpoint_login}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        data = await response.json();
        alert(data.message);
        console.log("Response:", data);
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        alert(data.message);
        console.error("Error:", error);
    }
}