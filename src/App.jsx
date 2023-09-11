import React, { useState } from "react";
import "./App.css";
import CountriesButtons from "./composants/CountriesButtons";
import CountryDetails from "./composants/CountryDetails";

function App() {
  const [country, setCountry] = useState("");

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <section style={{ padding: "20px", width: "60%", height: "100%" }}>
        <CountriesButtons onClick={setCountry} />
      </section>
      <section style={{ margin: "0 auto" }}>
        <CountryDetails country={country} />
      </section>
    </div>
  );
}

export default App;
