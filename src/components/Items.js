import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItems } from "../redux/items/selectors"
import "../assets/css/Items.css"

const Items = () => {
  const _items = useSelector(getItems);

  return (
    <Container className="border text-center itemsBox mb-2">
      <div>
        <p className="h3 text-center">Items</p>
        {_items?.map((item) => {
          return (
            <p key={item.name} className="mb-1 hoverItem">
              {item.name}{item.amount !== undefined && `: ${item.amount}`}
              {item.info && <span className="hoverText">{item.info}</span>}
            </p>
          );
        })}
      </div>
    </Container>
  );
};

export default Items;
