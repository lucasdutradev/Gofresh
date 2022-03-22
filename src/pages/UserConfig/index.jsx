import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";
import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { useState } from "react";
import { ConfigsContainer } from "../../components/configAux";
import { Link } from "react-router-dom";

export const UserConfig = () => {
  const { selected, setSelected } = useContext(ConfigContext);
  const user = JSON.parse(localStorage.getItem("@UserName"));

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <UserConfigStyles>
      <body>
        <header>
          <button>ir para lista</button>
        </header>
        <div className="container">
          <div className="iconContainer">
            <div className="icon">{user}</div>
          </div>
          <h1>{user}</h1>
          <ConfigsContainer />
        </div>
        <p className="toCartEnd">
          <Link to="/cartEnd">Finalizar</Link>
        </p>
      </body>
    </UserConfigStyles>
  );
};
