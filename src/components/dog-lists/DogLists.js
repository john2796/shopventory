import React, { useState } from "react";
import DogCard from "../dog-card/DogCard";
import { map, filter } from "lodash";
import "./DogLists.scss";

function DogLists({ dogs }) {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => setSearchString(e.target.value);

  const filteredDogs =
    searchString.length > 0
      ? filter(dogs, (d) =>
          d.name.toLowerCase().match(searchString.trim().toLowerCase())
        )
      : dogs;

  return (
    <div className="dog-lists">
      <h2 className="dog-lists__title">Dog Breeds</h2>

      <div className="dog-lists__searchbox-wrapper">
        <input
          className="dog-lists__searchbox"
          type="text"
          placeholder="search dog by name..."
          onChange={handleSearch}
          value={searchString}
        />
      </div>

      <div className="dog-lists__cards">
        {map(filteredDogs, (d) => (
          <DogCard
            key={d.name + d.subtype}
            dogName={d.name}
            subtype={d.subtype}
            imgSrc={d.img}
            imgAlt={d.name}
          />
        ))}
      </div>
    </div>
  );
}

export default DogLists;
