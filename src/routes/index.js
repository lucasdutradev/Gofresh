import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { CartEnd } from "../pages/CartEnd";
import LoginPage from "../pages/Login";
import Menu from "../pages/Menu";
import { OrderDetails } from "../pages/OrderDetails";
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
import Cart from "../pages/Cart";
import { UserConfig } from "../pages/UserConfig";
import { LoginContext } from "../Providers/postLogin";

const DefaultRoutes = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  console.log(isLogin);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Token"));
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin, setIsLogin]);

  return (
    <Switch>
      <Route exact path="/menu">
        <Menu />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/configuration">
        <UserConfig />
      </Route>
      <Route exact path="/cartEnd">
        <CartEnd />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default DefaultRoutes;
