import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItems } from "../redux/items/selectors";
import "../assets/css/Items.css";
import Item from "./Item";

const Items = () => {
  const _items = useSelector(getItems);
  console.log("_items :", _items);

  return (
    <Container className="border text-center itemsBox mb-2">
      <div>
        <p className="h3 text-center">Items</p>
        {Object.keys(_items).map((key) => {
          const item = _items[key];
          return (
            <Item
              key={item.name}
              name={item.name}
              amount={item.amount}
              owned={item.owned}
              equipped={item.equipped}
              info={item.info}
              use={item.use}
              alwaysShow={item.alwaysShow}
              reduxKey={key}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Items;
