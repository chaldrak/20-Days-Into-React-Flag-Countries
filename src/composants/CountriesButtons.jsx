import React from "react";
import Countries from "../constants/countries.json";

const CountriesButtons = ({ onClick }) => {
  const countryKeys = Object.keys(Countries);

  const handleCountryClick = (countryName) => {
    onClick(countryName);
  };

  return (
    <div className="btnDiv">
      {countryKeys.map((countryCode, idx) => (
        <button
          onClick={() => handleCountryClick(Countries[countryCode])}
          className="btn"
          type="button"
          key={idx}
        >
          {countryCode}
        </button>
      ))}
    </div>
  );
};

export default CountriesButtons;
