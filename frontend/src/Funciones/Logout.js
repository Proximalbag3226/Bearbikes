export const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = window.location.href;
}