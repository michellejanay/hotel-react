import React from "react";
import destinations from "../desinations";
import Card from "./Card";

const TouristInfoCards = () => (
  <div className="Card-Holder">
    <Card toVisit={destinations} />
  </div>
);

export default TouristInfoCards;
