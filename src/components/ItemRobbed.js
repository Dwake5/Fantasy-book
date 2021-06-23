import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeItemAmount} from "../redux/items/actions";
import { diceRolls } from "../utils";

// Child of BackpackRobbed, used in 218
const ItemRobbed = ({ rollNeeded, items, item, itemRolledFor }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  const [itemTested, setItemTested] = useState(false);
  const [itemKept, setItemKept] = useState(true);

  const testItem = (item) => {
    const rolled = diceRolls(2, true);
    const success = rolled <= rollNeeded;
    itemRolledFor()
    setItemTested(true);
    if (success) {
      setText(`Rolled a ${rolled}, item kept`);
    } else {
      setItemKept(false)
      setText(`Rolled a ${rolled}, item lost!`);
      changeItemAmount(dispatch, { name: item, amount: -100 });
    }
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col md={3}>
        <p className={!itemKept && "text-danger"}>{items[item].name}</p>
      </Col>
      <Col md={2}>
        <button
          disabled={itemTested}
          onClick={() => testItem(item)}
          className="btn btn-sm btn-warning ml-3 mb-3"
        >
          Test
        </button>
      </Col>
      <Col md={3}>{text && <p className={!itemKept && "text-danger"}>{text}</p>}</Col>
    </Row>
  );
};

export default ItemRobbed;
