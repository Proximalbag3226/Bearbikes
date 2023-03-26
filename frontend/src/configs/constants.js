
const apiHost = "127.0.0.1";
const apiPort = 9009;
export const dominioApi = `http://${apiHost}:${apiPort}`;

const apiUrl = "api/v1"

export const auth = {
    endpoint_registro: `${apiUrl}/auth/register`,
    endpoint_login: `${apiUrl}/auth/authenticate`,

    jwt_header : "Authorization",
    jwt_prefix : "Bearer "
}