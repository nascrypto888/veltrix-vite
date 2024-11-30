// src/components/InfoCards.js
import React from "react";
import "../styles/InfoCards.css";

const InfoCards = ({ data }) => {
  return (
    <div className="info-cards">
      <div className="info-cards-row">
        <div className="info-card">
          <h3>Members total</h3>
          <p>
            2,365,487 <span>+1,234</span>
          </p>
        </div>
        <div className="info-card">
          <h3>Members received</h3>
          <p>
            1,234,567 <span>+789</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
