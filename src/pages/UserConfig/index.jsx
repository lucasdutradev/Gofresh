import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";
import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { ConfigsContainer } from "../../components/configHandler";
import { HeaderB } from "../../components/HeaderB";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const UserConfig = () => {
  const history = useHistory();
  const { selected, userInfo } = useContext(ConfigContext);
  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = () => {
    selected.activeDay & selected.activeMeal
      ? history.push("/cartEnd")
      : toast.error("Selecione as opções.");
  };

  return (
    <UserConfigStyles>
      <HeaderB />
      <div className="container">
        <div className="iconContainer">
          {userInfo.name && <div className="icon">{userInfo.name[0]}</div>}
        </div>
        <h1>{userInfo.name}</h1>
        <ConfigsContainer />
        <button onClick={handleSubmit} className="toCartEnd">
          Salvar configurações
        </button>
      </div>
    </UserConfigStyles>
  );
};
