import React, { useState } from 'react';

// Importez les données des pays depuis le fichier JSON
import Countries from '/src/constants/countries.json';

// Importez le CSS nécessaire ici

const CountriesButtons = ({ onClick }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClick = (countryName) => {
    // Créez le chemin de l'image du drapeau en fonction du nom du pays
    const flagImagePath = `/src/assets/png1000px/${countryName.toLowerCase()}.png`;

    // Mettez à jour l'état avec le nom du pays et le chemin de l'image du drapeau
    setSelectedCountry({ name: countryName, flag: flagImagePath });

    // Appellez la fonction onClick passée en prop pour effectuer d'autres actions si nécessaire
    onClick(countryName);
  };

  return (
    <div>
        <div className="btnDiv">
            {Object.keys(Countries).map((countryName, idx) => (
            <button
            onClick={() => handleClick(countryName)}
            className="btn"
            type="button"
            key={idx}
            >
            {countryName}
            </button>
            ))}
        </div>
        <div>
            {selectedCountry && (
            <div className="selectedCountry">
            <img src={selectedCountry.flag} alt={selectedCountry.name} />
            <p>{selectedCountry.name}</p>
            </div>
        )}
        </div>
    </div>
  );
};

export default CountriesButtons;
