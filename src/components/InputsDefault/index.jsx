import { Input } from "./style";

const InputsDefault = ({ register, nameInput, ...res }) => {
  return <Input {...register(nameInput)} {...res} />;
};

export default InputsDefault;
