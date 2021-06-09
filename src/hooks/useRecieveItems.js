import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/items/selectors";
import { setItems } from "../redux/items/actions";

export const useRecieveItems = ({items}) => {
  const dispatch = useDispatch();
  const _items = useSelector(getItems);

    let newItems = [];
    if (_items) newItems = [..._items];
  
    items.forEach((newItem) => {
      // Do we already have the item?
      const findItem = newItems.find(
        (oldItem) => newItem.name === oldItem.name
      );
  
      if (!!findItem) {
        // Amend the quantity, if less than 0 make it zero
        if (findItem.amount) findItem.amount += newItem.amount;
        if (findItem.amount < 0) findItem.amount = 0;
        // Reinsert it in the same place
        const findIndex = _items.findIndex(
          (oldItem) => oldItem.name === findItem.name
        );
        newItems[findIndex] = findItem;
      } else {
        newItems.push(newItem);
      }
    });
  
    setItems(dispatch, newItems);
}
