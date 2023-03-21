
const handleLogout = () => {
    localStorage.removeItem('token');
    axios.post('/api/logout')
        .then(response => {
        })
        .catch(error => {
        });
}