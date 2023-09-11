import React from "react";

const CountryDetails = ({ country }) => {
  const getFlagImagePath = (countryName) => {
    return `/assets/png1000px/${countryName.toLowerCase()}.png`;
  };

  return (
    <div>
      <h2>Country Details:</h2>
      {country && (
        <div>
          <h3>{country}</h3>
          <img
            src={getFlagImagePath(country)}
            alt={`${country} Flag`}
            width="100"
            height="100"
          />
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
