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

  const { selected, setSelected, userInfo } = useContext(ConfigContext);
  console.log(selected);
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
      <>
        <HeaderB />

        {userInfo.name && (
          <div className="container">
            <div className="iconContainer">
              <div className="icon">{userInfo.name[0]}</div>
            </div>
            <h1>{userInfo.name}</h1>
            <ConfigsContainer />
          </div>
        )}

        <button onClick={handleSubmit} className="toCartEnd">
          Finalizar
        </button>
      </>
    </UserConfigStyles>
  );
};
