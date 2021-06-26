import { useSelector } from "react-redux";
import { getMoney, getOwnedItems } from "../redux/items/selectors";
import { getHaveJann, getLibra } from "../redux/stats/selectors";
import {
  getCantUseMagic,
  getDoorOpened,
  getGlandragor,
  getPage,
  getPassedPilfer,
  getPitfallStatus,
  getTraderViews,
  getForkDie,
  getSkunkDie,
  getSeenBox1,
  getSeenBox2,
  getLockStatus,
  getBypassGoblins,
  getNightCreatureFight,
  getSwordRefund,
} from "../redux/story/selectors";

const blockAllChoices = (choices) => {
  return choices.map((choice) => {
    return { ...choice, blocked: true };
  });
};

const unblockFirstChoice = (choices) => {
  return choices.map((choice, i) => {
    return { ...choice, blocked: i > 0 };
  });
};

const blockFirstChoice = (choices) => {
  return choices.map((choice, i) => {
    return { ...choice, blocked: i === 0 };
  });
};

export function useFilters(choices, luckPassed, pauseChoices) {
  const _pageNumber = useSelector(getPage);
  const _haveLibra = useSelector(getLibra);
  const _haveJann = useSelector(getHaveJann);
  const _cantUseMagic = useSelector(getCantUseMagic);
  const _money = useSelector(getMoney);
  const _traderViews = useSelector(getTraderViews);
  const _itemsOwned = useSelector(getOwnedItems);
  const _glandragor = useSelector(getGlandragor);
  const _pilferGrass = useSelector(getPassedPilfer);
  const _pitfallStatus = useSelector(getPitfallStatus);
  const _doorOpened = useSelector(getDoorOpened);
  const _forkDie = useSelector(getForkDie);
  const _skunkDie = useSelector(getSkunkDie);
  const _seenBox1 = useSelector(getSeenBox1);
  const _seenBox2 = useSelector(getSeenBox2);
  const _lockStatus = useSelector(getLockStatus);
  const _bypassGoblins = useSelector(getBypassGoblins);
  const _nightCreatureFight = useSelector(getNightCreatureFight);
  const _swordRefund = useSelector(getSwordRefund);

  const canAfford = (choice) => {
    const choiceCost = choice.cost;
    if (choiceCost === undefined) return choice;
    if (choiceCost === "must roll") return { ...choice, blocked: true };
    return choiceCost <= _money ? choice : { ...choice, blocked: true };
  };

  const filterCanAfford = (choices) => {
    return choices.map((choice) => canAfford(choice));
  };

  const haveItem = (choice) => {
    const requires = choice.requires;
    if (requires === undefined) return choice;
    return _itemsOwned.includes(requires)
      ? choice
      : { ...choice, blocked: true };
  };

  const filterNeedItems = (choices) => {
    return choices.map((choice) => haveItem(choice));
  };

  const blockItem = (choice) => {
    const requires = choice.blockItem;
    if (requires === undefined) return choice;
    return !_itemsOwned.includes(requires)
      ? choice
      : { ...choice, blocked: true };
  };

  const filterBlockItems = (choices) => {
    return choices.map((choice) => blockItem(choice));
  };

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
    const needLibra = choice.needLibra;
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
    if (_nightCreatureFight) {
      return choices.slice(0, 6);
    } else {
      return choices.slice(-1);
    }
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
    _haveJann ? (choices[1].blocked = true) : (choices[0].blocked = true);
    return choices;
  }

  if (_pageNumber === 407) {
    const goblinsFlee = _bypassGoblins;
    if (goblinsFlee === null) return choices;
    if (goblinsFlee) {
      return [{ ...choices[0] }, { ...choices[1], blocked: false }];
    } else {
      return [{ ...choices[0], blocked: false }, { ...choices[1] }];
    }
  }

  // Has door been tried, has door been opened?
  if (_pageNumber === 142) {
    const lockOpen = _lockStatus.broken;
    const lockTried = _lockStatus.tried;
    let canLeave = lockTried;
    if (lockOpen) canLeave = false;
    let choice1 = { ...choices[0], blocked: !lockOpen };
    let choice2 = { ...choices[1], blocked: !canLeave };
    return [{ ...choice1 }, { ...choice2 }];
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

    let choice1 = { ...choices[0], blocked: !haveTraderItem };
    let choice2 = { ...choices[1], blocked: haveTraderItem };
    return [{ ...choice1 }, { ...choice2 }];
  }

  // Has door been tried, has door been opened?
  if (_pageNumber === 277) {
    if (_pitfallStatus === null)
      return [
        { ...choices[0], blocked: true },
        { ...choices[1], blocked: true },
      ];
    if (_pitfallStatus === "dead")
      return [
        { ...choices[0], blocked: true },
        { ...choices[1], blocked: false },
      ];
    if (_pitfallStatus === "passed")
      return [
        { ...choices[0], blocked: false },
        { ...choices[1], blocked: true },
      ];
  }

  // Leave this for now OpenDoor
  if (_pageNumber === 228) {
    if (_doorOpened === null) return choices;
    if (_doorOpened) {
      return [
        { ...choices[0], blocked: false },
        { ...choices[1] },
        { ...choices[2] },
      ];
    } else {
      const newChoices = [
        { ...choices[0] },
        { ...choices[1], blocked: false },
        { ...choices[2], blocked: false },
      ];
      return filterNeedLibra(newChoices);
    }
  }

  // This one also doesnt rerender??
  if (_pageNumber === 254) {
    const returnIndex = Math.ceil(_forkDie / 2) - 1;
    return choices.map((choice, i) => {
      if (i === returnIndex) return { ...choice, blocked: false };
      return choice;
    });
  }

  if (_pageNumber === 295) {
    if (_skunkDie === 0) return choices;
    const fightSkunk = _skunkDie === 1;
    let choice1 = { ...choices[0], blocked: !fightSkunk };
    let choice2 = { ...choices[1], blocked: fightSkunk };
    return [{ ...choice1 }, { ...choice2 }];
  }

  if (_pageNumber === 258) {
    if (!_seenBox1) return choices;
    else return [{ ...choices[0], blocked: true }, { ...choices[1] }];
  }

  if (_pageNumber === 403) {
    if (!_seenBox2) return choices;
    else return [{ ...choices[0], blocked: true }, { ...choices[1] }];
  }

  // Pilfer grass
  if (_pageNumber === 32 || _pageNumber === 57) {
    return _pilferGrass ? choices : [{ ...choices[0], blocked: true }];
  }

  // Glandragor item needed
  if (_pageNumber === 29) {
    const value = _glandragor;
    if (value === "blocked") return blockAllChoices(choices);
    if (value === "topUnblocked") return unblockFirstChoice(choices);
    if (value === "topBlocked") return blockFirstChoice(choices);
  }

  // Trader 1, player can only see each item once, and 3 items in total (there are 6)
  if (_pageNumber === 280) {
    if (_traderViews.length >= 3) {
      let newChoices = choices.slice(0, -1).map((choice) => {
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
  filtered = filterMagic(filtered);
  return filtered;
}

export default useFilters;
