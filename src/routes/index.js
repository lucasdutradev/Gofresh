import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { CartEnd } from "../pages/CartEnd";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import Menu from "../pages/Menu";
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
      <Route exact path="/" component={() => <Home />} />
      <Route path="/menu" component={() => <Menu />} />
      <Route path="/login" component={() => <LoginPage />} />
      <Route path="/register" component={() => <RegisterPage />} />
      <Route path="/configuration" component={() => <UserConfig />} />
      <Route path="/cartend" component={() => <CartEnd />} />
      <Route path="/cart" component={() => <Cart />} />
      <Route exact path="*" component={() => <PageNotFound />} />
    </Switch>
  );
};

export default DefaultRoutes;
