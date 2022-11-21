import React from "react";

const Card = (props) => (
  <div className="Card">
    {props.toVisit.map((place, i) => {
      return (
        <div key={i}>
          <img
            className="Card-img"
            src={require(`./images/${place.src}.jpg`)}
            alt={place.name}
          />
          <a
            className="Card-link"
            href={place.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {place.title}
          </a>
        </div>
      );
    })}
  </div>
);

export default Card;
