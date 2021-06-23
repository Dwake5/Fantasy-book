import { Col, Row } from "react-bootstrap";

const CombatText = ({ text }) => {
  const { line1, line1style, line2, line2style } = text;
  return (
    <Row>
      <Col>
        <div>
          <p className={line1style}>{line1}</p>
          {line2 && <p className={line2style}>{line2}</p>}
        </div>
      </Col>
    </Row>
  );
};

export default CombatText;
