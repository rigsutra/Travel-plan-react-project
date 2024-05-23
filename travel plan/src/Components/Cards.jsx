/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Cards.css";

const Cards = ({ tour, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }

  const { id, name, info, image, price } = tour;
  const desc = readMore ? info : `${info.substring(0, 200)}... `;
  
  return (
    <div className="card-container">
      <div key={id}>
        <img src={image} alt={name} />
        <h3>₹ {price}</h3>
        <h2>{name}</h2>
        <p className="information">
          {desc}
          <span onClick={handleReadMore}>
            {readMore ? "show less" : "show more"}
          </span>
        </p>
        <div className="btn">
          <button onClick={() => removeTours(id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
