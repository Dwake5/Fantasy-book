import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { pluralize } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/items/selectors";
import { payMoney, setItems } from "../redux/items/actions";

const BuyProvisions = ({ amount, cost, playerMoney }) => {
  const dispatch = useDispatch();

  // Used on node 257
  const _items = useSelector(getItems);
  const [purchased, setPurchased] = useState(false);
  const localItem = [{ name: "Provisions", amount }];

  const handlePurchase = () => {
    setItems(dispatch, localItem, _items);
    payMoney(dispatch, cost, _items);
    setPurchased(true);
  };

  if (playerMoney < cost) return null;
  return (
    <Container>
      <p>
        Do you want to buy {amount} {pluralize("Provision", amount)} for {cost}{" "}
        Gold {pluralize("Piece", cost)}?
      </p>
      <button onClick={handlePurchase} disabled={purchased} className="mb-3">
        Buy the Provisions
      </button>
    </Container>
  );
};

export default BuyProvisions;
