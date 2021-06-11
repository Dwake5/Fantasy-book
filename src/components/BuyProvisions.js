import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { pluralize } from "../utils";
import { useDispatch } from "react-redux";
import { payMoney, getItem } from "../redux/items/actions";

// Used on node 257. Got here from 81 or 198
const BuyProvisions = ({ amount, cost, playerMoney }) => {
  const dispatch = useDispatch();

  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    getItem(dispatch, { name: "provisions", amount });
    payMoney(dispatch, cost);
    setPurchased(true);
  };

  if (playerMoney < cost) return null;
  return (
    <Container>
      <p>
        Do you want to buy {amount} {pluralize("Provision", amount)} for {cost}{" "}
        Gold {pluralize("Piece", cost)}?
      </p>
      <button
        onClick={handlePurchase}
        type="button"
        className="btn btn-success mb-3"
        disabled={purchased}
      >
        Buy the Provisions
      </button>
    </Container>
  );
};

export default BuyProvisions;
