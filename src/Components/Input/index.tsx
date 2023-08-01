import { useState } from "react";
import { useForm } from "../../context/ThemeContext";
import { InputTS } from "../../Types/Input";
import * as C from "./styles";
import useDebounce from "./useDebounce";

const delay = 500;

export const Input = ({ value, search }: InputTS) => {
  const { state } = useForm();

  const [input, setInput] = useState("");

  const deboucedChange = useDebounce(search, delay);

  const handleChange = (e: string) => {
    deboucedChange(e);
    setInput(e);
  };

  return (
    <C.InputArea theme={state.theme}>
      <input
        type="text"
        placeholder="Search By Country"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <select
        value="Filter by Region"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </C.InputArea>
  );
};
