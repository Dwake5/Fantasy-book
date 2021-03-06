import SpareAssassin from "./SpareAssassin";
import knight from "../../assets/images/knight.jpeg";
import { Col } from "react-bootstrap";
import { chanceToHit } from "../../utils";

const PlayerStats = ({
  stamina,
  maxStamina,
  skill,
  playerAttStrModifier,
  luck,
  damage,
  maxLuck,
  someoneDead,
  autoFight,
  handleAttack,
  handleLuck,
  canUseLuck,
  setAutoFight,
  pageNumber,
  enemyStamina,
  handleSpareHim,
  doubleSkill,
  lastLife,
  skillDifference,
}) => {
  const damageExcess = damage - 2;
  const excessFunction = (stat) => {
    if (stat === 0) return;
    if (stat > 0) return `(+${stat})`;
    if (stat < 0) return `(${stat})`;
  };

  return (
    <Col>
      <p className="text-center h3">You</p>
      <div className="imageContainer mb-3">
        <img src={knight} alt="You fighting the enemy" />
      </div>
      <p className="mb-0">
        Stamina: {stamina} / {maxStamina}
      </p>
      <p className="mb-0">
        Attack Strength: {skill + playerAttStrModifier}{" "}
        {doubleSkill ? `(x2)` : ""} {excessFunction(playerAttStrModifier)}
      </p>
      <p className="mb-0">
        Accuracy: {chanceToHit(skillDifference).toFixed(2)}%
      </p>
      {/* Might want to rewrite damage */}
      <p className="mb-0">
        Damage: {damage} {excessFunction(damageExcess)} 
      </p>
      <p className="mb-3">
        Luck: {luck} / {maxLuck}
      </p>

      <div className="d-flex flex-column">
        <div>
          <button
            disabled={someoneDead || autoFight || lastLife}
            onClick={handleAttack}
            className="btn btn-danger mb-4 mr-3"
          >
            Attack
          </button>
          <button
            onClick={handleLuck}
            disabled={!canUseLuck || someoneDead || autoFight}
            className="btn btn-warning mb-4"
          >
            Test your Luck
          </button>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <button
              className="mr-2 btn border"
              onClick={() => setAutoFight((auto) => !auto)}
              disabled={someoneDead || lastLife}
            >
              Auto Fight
            </button>
            <p className="mb-0">{autoFight ? "ON" : "OFF"}</p>
          </div>
          {pageNumber === 117 && (
            <SpareAssassin
              playerHP={stamina}
              enemyHP={enemyStamina}
              spareHim={handleSpareHim}
            />
          )}
        </div>
      </div>
    </Col>
  );
};

export default PlayerStats;
