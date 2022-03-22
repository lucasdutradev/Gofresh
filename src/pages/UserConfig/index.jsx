import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";
import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { ConfigsContainer } from "../../components/configHandler";
import { Link } from "react-router-dom";
import { ButtonReturn } from "../../components/ButtonReturn";

export const UserConfig = () => {
  const { selected, setSelected, userInfo } = useContext(ConfigContext);

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <UserConfigStyles>
      <>
        <header>
          <ButtonReturn />
        </header>

        {userInfo.name && (
          <div className="container">
            <div className="iconContainer">
              <div className="icon">{userInfo.name[0]}</div>
            </div>
            <h1>{userInfo.name}</h1>
            <ConfigsContainer />
          </div>
        )}

        <p className="toCartEnd">
          <Link to="/cartEnd">Finalizar</Link>
        </p>
      </>
    </UserConfigStyles>
  );
};
