import React, { useState, useEffect } from "react";
import axios from "axios";

const CardMakeUp = ({ filters }) => {
  const [makeup, setMakeup] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=<maybelline$>filters</maybelline$>`
      )
      .then(response => {
        setMakeup(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Maybelline</h1>
        {makeup.map(item => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image_link} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardMakeUp;
