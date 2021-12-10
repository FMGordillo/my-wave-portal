import type { ChangeEventHandler, FunctionComponent } from "react";
import { Input as InputComponent } from "./styles";

type InputProps = {
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Input: FunctionComponent<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <InputComponent
      autoComplete="off"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
