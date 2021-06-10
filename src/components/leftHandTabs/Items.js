import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/items/selectors";
import "../../assets/css/Items.css";
import Item from "./Item";
import { isStatMax } from "../../redux/stats/selectors";

const Items = () => {
  const _items = useSelector(getItems);
  const _isHealthMax = useSelector((state) => isStatMax(state, "stamina"));

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
              singular={item.singular}
              equipped={item.equipped}
              info={item.info}
              use={item.use}
              alwaysShow={item.alwaysShow}
              reduxKey={key}
              healthMax={_isHealthMax}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Items;
