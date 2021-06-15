import { useSelector } from "react-redux";
import { getMoney, getOwnedItems } from "../redux/items/selectors";
import { getHaveJann, getLibra } from "../redux/stats/selectors";
import {
  getCantUseMagic,
  getPage,
  getTraderViews,
} from "../redux/story/selectors";

export function useFilters(choices, luckPassed, pauseChoices) {
  const _pageNumber = useSelector(getPage);
  const _haveLibra = useSelector(getLibra);
  const _haveJann = useSelector(getHaveJann);
  const _cantUseMagic = useSelector(getCantUseMagic);
  const _money = useSelector(getMoney);
  const _traderViews = useSelector(getTraderViews);
  const _itemsOwned = useSelector(getOwnedItems);

  const canAfford = (choice) => {
    const choiceCost = choice.cost;
    if (choiceCost === undefined) return true;
    if (choiceCost === "must roll") return false;
    return choiceCost <= _money;
  };

  const filterCanAfford = (choices) => {
    return choices.filter((choice) => canAfford(choice));
  };

  const haveItem = (choice) => {
    const requires = choice.requires;
    if (requires === undefined) return true;
    return _itemsOwned.includes(requires);
  };

  const filterNeedItems = (choices) => {
    return choices.filter((choice) => haveItem(choice));
  };

  const isSpellAndHaveJann = (choice) => {
    const isSpell = choice.text.slice(0, 5) === "Magic";
    if (!isSpell) return true;
    if (_haveJann && _cantUseMagic) return false;
    return true;
  };

  const filterMagic = (choices) => {
    return choices.filter((choice) => isSpellAndHaveJann(choice));
  };

  const needAndHaveLibra = (choice) => {
    const needLibra = choice.needLibra;
    if (needLibra === undefined) return true;
    return _haveLibra;
  };

  const filterNeedLibra = (choices) => {
    return choices.filter((choice) => needAndHaveLibra(choice));
  };

  const checkLuckOptions = (choice) => {
    // See if luck is involved, if luck is not involved, return the choice
    const involvesLuck = choice.luck;
    if (involvesLuck === undefined) return true;

    // try to show a choice that is only blocked after a luck role where possible
    if (pauseChoices === undefined && choice.luck === "blocked") return true;

    // if the page forced a pause (i.e. needed luck role) then only show the result of Test your Luck
    if (pauseChoices !== undefined) {
      if (luckPassed && choice.luck === "success") return true;
      if (!luckPassed && choice.luck === "failed") return true;
    }
    return false;
  };

  const filterLuckOptions = (choices) => {
    return choices.filter((choice) => checkLuckOptions(choice));
  };

  if (_pageNumber === 100) {
    return _haveJann ? [choices[0]] : [choices[1]];
  }
  if (_pageNumber === 280) {
    if (_traderViews >= 10) return choices.slice(-1);
    if (_traderViews < 10) return choices.filter((choice) => !choice.visited);
  }
  let filtered = filterNeedItems(choices);
  filtered = filterLuckOptions(filtered);
  filtered = filterCanAfford(filtered);
  filtered = filterNeedLibra(filtered);
  filtered = filterMagic(filtered);
  return filtered;
}

export default useFilters;
