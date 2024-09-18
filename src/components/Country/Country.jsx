import { useState } from "react";
import "./Country.css";
const country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, area, population, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  //   const passWithParams = () => handleVisitedCountry(country);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Post Code: {area}</p>
      <p>Population: {population / 1000000}M</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedFlags(country.flags)}>
        Visited Flags
      </button>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as visited
      </button>
      <br />
      <button onClick={handleVisited}>
        {visited ? "visited" : "Want to visit"}
      </button>
      {visited && " I have visited this country"}
    </div>
  );
};

export default country;
