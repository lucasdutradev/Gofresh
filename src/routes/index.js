import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { LoginContext } from "../Providers/postLogin";

const DefaultRoutes = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Token"));
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin, setIsLogin]);

  return (
    <Switch>
      <Route exact path="/menu">
        <h1>Redirecionou</h1>
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default DefaultRoutes;
