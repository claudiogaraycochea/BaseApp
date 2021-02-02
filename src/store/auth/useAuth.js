import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    console.log("authToken", authToken);
    const user = jwtDecode(authToken);
    setUser(user);
    console.log("user token", user);
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    console.log("logged out");
    setUser(null);
    console.log(user);
    authStorage.removeToken();
  };

  return { user, login, logout };
};
