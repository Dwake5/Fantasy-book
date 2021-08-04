
import giant from "../../assets/images/giant.jpeg";
import { Col } from "react-bootstrap";
import { chanceToHit } from "../../utils";

const AllyStats = ({
  name,
  stamina,
  maxStamina,
  skill,
  autoFight,
  setAutoFight,
  skillDifference,
}) => {

  return (
    <Col>
      <p className="text-center h3">{name}</p>
      <div className="imageContainer mb-3">
        <img src={giant} alt="You're allie fighting the enemy" />
      </div>
      <p className="mb-0">
        Stamina: {stamina} / {maxStamina}
      </p>
      <p className="mb-0">
        Attack Strength: {skill}
      </p>
      <p className="mb-0">
        Accuracy: {chanceToHit(skillDifference).toFixed(2)}%
      </p>
      <p className="mb-0">
        Damage: 2
      </p>

      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <button
              className="mr-2 btn border"
              onClick={() => setAutoFight((auto) => !auto)}
            >
              Auto Fight
            </button>
            <p className="mb-0">{autoFight ? "ON" : "OFF"}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllyStats;
