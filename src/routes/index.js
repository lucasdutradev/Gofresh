import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact to="/login">
        <LoginPage />
      </Route>
      <Route exact to="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default DefaultRoutes;
