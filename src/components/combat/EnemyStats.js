import { Row, Col } from "react-bootstrap";
import wolf from "../../assets/images/wolf.jpeg";
import { chanceToHit } from "../../utils";
import FutureEnemy from "./FutureEnemy";

const EnemyStats = ({
  enemyName,
  enemyStamina,
  enemySkill,
  enemyAttStrModifier,
  enemyMaxStamina,
  extraEnemies,
  skillDifference,
}) => {
  return (
    <Col>
      <p className="text-center h3">{enemyName}</p>
      <div className="imageContainer d-flex ml-auto mb-3">
        <img src={wolf} alt="Your enemy" />
      </div>
      <div className="text-right">
        <p className="mb-0">
          Stamina: {enemyStamina} / {enemyMaxStamina}
        </p>
        <p className="mb-0">
          Attack Strength: {enemySkill + enemyAttStrModifier}{" "}
          {enemyAttStrModifier !== 0
            ? `(${enemyAttStrModifier > 0 ? "+" : ""}${enemyAttStrModifier})`
            : ""}
        </p>
        <p className="mb-0">
          Accuracy: {chanceToHit(skillDifference).toFixed(2)}%
        </p>
      </div>
      <div>
        {extraEnemies.length > 0 && (
          <>
            <p className="pb-0">Up next:</p>
            <Row className="px-2">
              {extraEnemies.map((enemy, i) => (
                <FutureEnemy key={i} enemy={enemy} />
              ))}
            </Row>
          </>
        )}
      </div>
    </Col>
  );
};

export default EnemyStats;
