import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleMarkVisited, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: "green" }}>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleMarkVisited(country)}>Mark Visited</button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>Visited</button>
      {visited && "I have Visited tgghis country"}
    </div>
  );
};

export default Country;
