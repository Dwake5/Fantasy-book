import { useSelector } from "react-redux";
import { getMoney, getOwnedItems } from "../redux/items/selectors";
import { getHaveJann, getLibra } from "../redux/stats/selectors";
import {
  getCantUseMagic,
  getNightCreatureFight,
  getPage,
  getSeenBox1,
  getSeenBox2,
  getSwordRefund,
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
  const _seenBox1 = useSelector(getSeenBox1);
  const _seenBox2 = useSelector(getSeenBox2);
  const _nightCreatureFight = useSelector(getNightCreatureFight);
  const _swordRefund = useSelector(getSwordRefund);

  if (pauseChoices) return [];

  const canAfford = (choice) => {
    const choiceCost = choice.cost;
    if (choiceCost === undefined) return choice;
    if (choiceCost === "must roll") return { ...choice, blocked: true };
    return choiceCost <= _money ? choice : { ...choice, blocked: true };
  };

  const filterCanAfford = (choices) =>
    choices.map((choice) => canAfford(choice));

  const haveItem = (choice) => {
    const { requires } = choice;
    if (requires === undefined) return choice;
    return _itemsOwned.includes(requires)
      ? choice
      : { ...choice, blocked: true };
  };

  const filterNeedItems = (choices) =>
    choices.map((choice) => haveItem(choice));

  const blockItem = (choice) => {
    const requires = choice.blockItem;
    if (requires === undefined) return choice;
    return !_itemsOwned.includes(requires)
      ? choice
      : { ...choice, blocked: true };
  };

  const filterBlockItems = (choices) =>
    choices.map((choice) => blockItem(choice));

  const isSpellAndHaveJann = (choice) => {
    const isSpell = choice.text.slice(0, 5) === "Magic";
    if (!isSpell) return choice;
    if (_haveJann && _cantUseMagic) return { ...choice, blocked: true };
    return choice;
  };

  const filterMagic = (choices) => {
    return choices.map((choice) => isSpellAndHaveJann(choice));
  };

  const needAndHaveLibra = (choice) => {
    const { needLibra } = choice;
    if (needLibra === undefined) return choice;
    return _haveLibra ? choice : { ...choice, blocked: true };
  };

  const checkLibraBlocked = (choice) => {
    const blockLibra = choice.libraBlock;
    if (blockLibra === undefined) return choice;
    return _haveLibra ? { ...choice, blocked: true } : choice;
  };

  const filterNeedLibra = (choices) => {
    choices = choices.map((choice) => checkLibraBlocked(choice));
    return choices.map((choice) => needAndHaveLibra(choice));
  };

  const checkLuckOptions = (choice) => {
    // See if luck is involved, if luck is not involved, return the choice
    const involvesLuck = choice.luck;
    if (involvesLuck === undefined) return choice;

    // try to show a choice that is only blocked after a luck role where possible
    if (pauseChoices === undefined && choice.luck === "blocked") return choice;

    // if the page forced a pause (i.e. needed luck role) then only show the result of Test your Luck
    if (pauseChoices !== undefined) {
      if (luckPassed && choice.luck === "success") return choice;
      if (!luckPassed && choice.luck === "failed") return choice;
    }
    return { ...choice, blocked: true };
  };

  const filterLuckOptions = (choices) => {
    return choices.map((choice) => checkLuckOptions(choice));
  };

  // Night creatures
  if (_pageNumber === 123) {
    return _nightCreatureFight ? choices.slice(0, 6) : choices.slice(-1);
  }

  if (_pageNumber === 194) {
    const canRefund = _swordRefund;
    return [
      { ...choices[0], blocked: !canRefund },
      { ...choices[1], blocked: canRefund },
    ];
  }

  // Do you have Jann?
  if (_pageNumber === 100) {
    const choiceToBlock = _haveJann ? 1 : 0;
    choices[choiceToBlock].blocked = true;
    return choices;
  }

  if (_pageNumber === 91) {
    const traderItems = [
      "potion",
      "broadsword",
      "pipe",
      "axe",
      "goblinTeeth",
      "jewel",
    ];
    const haveTraderItem = _itemsOwned.some((item) =>
      traderItems.includes(item)
    );

    const choice1 = { ...choices[0], blocked: !haveTraderItem };
    const choice2 = { ...choices[1], blocked: haveTraderItem };
    return [{ ...choice1 }, { ...choice2 }];
  }

  if (_pageNumber === 258) {
    return !_seenBox1
      ? choices
      : [{ ...choices[0], blocked: true }, { ...choices[1] }];
  }

  if (_pageNumber === 403) {
    return !_seenBox2
      ? choices
      : [{ ...choices[0], blocked: true }, { ...choices[1] }];
  }

  // Trader 1, player can only see each item once, and 3 items in total (there are 6)
  if (_pageNumber === 280) {
    if (_traderViews.length >= 3) {
      const newChoices = choices.slice(0, -1).map((choice) => {
        return { ...choice, blocked: true };
      });
      newChoices.push(choices.slice(-1)[0]);
      return newChoices;
    }
    if (_traderViews.length < 3)
      return choices.map((choice) => {
        return _traderViews.includes(choice.goToPage)
          ? { ...choice, blocked: true }
          : choice;
      });
  }

  let filtered = filterNeedItems(choices);
  filtered = filterBlockItems(filtered);
  filtered = filterLuckOptions(filtered);
  filtered = filterCanAfford(filtered);
  filtered = filterNeedLibra(filtered);
  return filterMagic(filtered);
}

export default useFilters;
