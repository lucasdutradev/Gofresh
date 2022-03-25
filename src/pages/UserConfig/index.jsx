import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";
import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { ConfigsContainer } from "../../components/configHandlers";
import { HeaderB } from "../../components/HeaderB";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const UserConfig = () => {
  const history = useHistory();

  const { selected, userInfo } = useContext(ConfigContext);

  if (!localStorage.getItem("@Token")) <Redirect to="/login" />;

  const handleSubmit = () =>
    selected.activeDay & selected.activeMeal
      ? history.push("/cartEnd")
      : toast.error("Selecione as opções.");

  const IconRender = () => {
    if (userInfo.name) {
      return (
        <>
          <div className="iconContainer">
            <div className="icon">{userInfo.name[0]}</div>
          </div>
          <h1>{userInfo.name}</h1>
        </>
      );
    } else return <></>;
  };

  useEffect(() => {
    IconRender();
  }, [userInfo.name]);

  return (
    <UserConfigStyles>
      <HeaderB />
      <div className="container">
        <IconRender />
        <ConfigsContainer />
        <button onClick={handleSubmit} className="toCartEnd">
          Salvar configurações
        </button>
      </div>
    </UserConfigStyles>
  );
};
