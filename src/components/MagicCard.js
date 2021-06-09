import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/MagicCard.css";

const MagicCard = ({ name, description, cost, requires }) => {
  return (
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between">
          <h3>{name}</h3>
          <h3>
            <span className="cost">cost: </span>
            {cost}
          </h3>
        </div>
      </Card.Header>
      <Card.Body>
        {requires && <p className="requires">{requires}</p>}
        <p>{description}</p>
      </Card.Body>
    </Card>
  );
};

export default MagicCard;
