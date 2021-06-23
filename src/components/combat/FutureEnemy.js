import { Col } from "react-bootstrap";
import wolf from "../../assets/images/wolf.jpeg";

const FutureEnemy = ({ enemy }) => {
  const { name, skill, stamina } = enemy;
  return (
    <Col className="littleEnemyCont" key={name}>
      <p className="mb-0 text-center font-weight-bold">{name}</p>
      <div className="littleContainer d-flex">
        <img src={wolf} alt="Your enemy" />
      </div>
      <div className="d-flex justify-content-between">
        <p className="textSmall m-0">HP: {stamina}</p>
        <p className="textSmall m-0">Skill: {skill}</p>
      </div>
    </Col>
  );
};

export default FutureEnemy;
