import React from "react";
import { Col, Row } from "react-bootstrap";
import spells from "../../assets/spells";
import MagicCard from "./MagicCard";

const MagicModal = () => {
  return (
    <Row>
      {spells.map((spell) => (
        <Col className="mb-3 d-flex" xs={12} md={6} lg={4} xl={3} key={spell.name}>
          <MagicCard
            name={spell.name}
            cost={spell.cost}
            requires={spell.requires}
            description={spell.description}
          />
        </Col>
        ))}
    </Row>
  );
};

export default MagicModal;
