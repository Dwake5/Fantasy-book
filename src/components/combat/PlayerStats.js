import SpareAssassin from "./SpareAssassin";
import knight from "../../assets/images/knight.jpeg";
import { Col } from "react-bootstrap";

const PlayerStats = ({
  stamina,
  maxStamina,
  skill,
  playerAttStrModifier,
  luck,
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
}) => {
  return (
    <Col className="border">
      <p className="text-center h3">You</p>
      <div className="imageContainer mb-3">
        <img src={knight} alt="You fighting the enemy" />
      </div>
      <p className="mb-0">
        Stamina: {stamina} / {maxStamina}
      </p>
      <p className="mb-0">
        Attack Strength: {skill}{" "}
        {playerAttStrModifier !== 0
          ? `(${playerAttStrModifier > 0 ? "+" : ""}${playerAttStrModifier})`
          : ""}
      </p>
      <p className="mb-3">
        Luck: {luck} / {maxLuck}
      </p>

      <div className="d-flex flex-column">
        <div>
          <button
            disabled={someoneDead || autoFight}
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
              disabled={someoneDead}
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
