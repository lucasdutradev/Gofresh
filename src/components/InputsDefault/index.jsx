import { Input } from "./style";

const InputsDefault = ({ isError, register, nameInput, ...res }) => {
  return <Input isError={isError} {...register(nameInput)} {...res} />;
};

export default InputsDefault;
