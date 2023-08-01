import React from "react";
import { themeActions, useForm } from "../../context/ThemeContext";
import * as C from "./styles";

export const Header = () => {
  const { state, dispatch } = useForm();

  const handleChangeTheme = () => {
    dispatch({
      type: themeActions.setTheme,
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <C.Header theme={state.theme}>
      <div className="container">
        <h1>Countries Assignment</h1>
        <p onClick={handleChangeTheme}>Toggle Dark Mode</p>
      </div>
    </C.Header>
  );
};
