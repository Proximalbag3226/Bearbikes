export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return true;
    } else {
      return false;
    }
  };
