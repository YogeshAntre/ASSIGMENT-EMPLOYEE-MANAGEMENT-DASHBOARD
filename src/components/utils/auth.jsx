export const isLoggedIn = () =>
    localStorage.getItem("isAuth") === "true";
  
  export const loginUser = () =>
    localStorage.setItem("isAuth", "true");
  
  export const logoutUser = () =>
    localStorage.removeItem("isAuth");
  