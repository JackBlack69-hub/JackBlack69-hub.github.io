import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../context/ThemeContext";
import { CountryItemTS } from "../../Types/CountryItem";
import * as C from "./styles";

export const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemTS) => {
  const { state } = useForm();

  return (
    <C.CountryItem theme={state.theme}>
      <Link to={`/country/${name}`}>
        <div className="img--area">
          <img src={flag} alt={`${name}`} />
        </div>
        <div className="data--area">
          <p className="country--name">{name}</p>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </C.CountryItem>
  );
};
