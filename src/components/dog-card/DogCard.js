import React from "react";
import "./DogCard.scss";

function DogCard({
  dogName,
  imgSrc,
  imgAlt,
  subtype,
  "data-testid": dataTest,
}) {
  return (
    <div className="dog-card">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="dog-card__img"
        data-testid={`${dataTest}.img`}
      />

      <footer className="dog-card__footer">
        <h3 className="dog-card__footer__subtype">
          {subtype && (
            <span data-testid={`${dataTest}.subtype`}>{`${subtype}-`}</span>
          )}
          <span data-testid={`${dataTest}.name`}>{dogName}</span>
        </h3>
      </footer>
    </div>
  );
}

export default DogCard;
