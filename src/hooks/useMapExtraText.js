import { useSelector } from "react-redux";
import BreakDoor from "../components/miniGames/BreakDoor";
import Trader from "../components/miniGames/Trader";
import { getMoney } from "../redux/items/selectors";
import { getTraderViews } from "../redux/story/selectors";
import ForkDie from "../components/miniGames/ForkDie";
import GoblinsFlee from "../components/miniGames/GoblinsFlee";
import LockSmash from "../components/miniGames/LockSmash";
import OfferArtefact from "../components/miniGames/OfferArtefact";
import OpenDoor from "../components/miniGames/OpenDoor";
import PickpocketBox from "../components/miniGames/PickpocketBox";
import PilferGrass from "../components/miniGames/PilferGrass";
import PitFall from "../components/miniGames/PitFall";
import SnakeBites from "../components/miniGames/SnakeBites";
import WitchSteals from "../components/miniGames/WitchSteals";
import BuyProvisions from "../components/miniGames/BuyProvisions";

export function useMapExtraText(
  pageNumber,
  useItemVariableCost,
  setRerender,
  extraText
) {
  const _traderViews = useSelector(getTraderViews);
  const _money = useSelector(getMoney);

  if (extraText === undefined) return null;

  switch (pageNumber) {
    case 280:
      return <Trader itemViews={_traderViews.length} />;
    case 214:
      return (
        <Trader
          dice={2}
          changeCost={useItemVariableCost}
          key={214}
          itemName="broadsword"
        />
      );
    case 22:
      return (
        <Trader
          dice={1}
          changeCost={useItemVariableCost}
          key={22}
          itemName="pipe"
        />
      );
    case 141:
      return (
        <Trader
          dice={2}
          changeCost={useItemVariableCost}
          key={141}
          itemName="axe"
          optional
        />
      );
    case 257:
      return <BuyProvisions amount={2} cost={2} playerMoney={_money} />;
    case 29:
      return <OfferArtefact rerender={setRerender} />;
    case 32:
      return <PilferGrass amount={2} pageNumber={32} rerender={setRerender} />;
    case 57:
      return <PilferGrass amount={1} pageNumber={57} rerender={setRerender} />;
    case 48:
      return <WitchSteals pageNumber={pageNumber} />;
    case 93:
      return <BreakDoor />;
    case 142:
      return <LockSmash rerender={setRerender} />;
    case 228:
      return <OpenDoor rerender={setRerender} />;
    case 254:
      return <ForkDie type="regular" rerender={setRerender} />;
    case 295:
      return <ForkDie type="skunk" rerender={setRerender} />;
    case 258:
      return <PickpocketBox />;
    case 277:
      return <PitFall rerender={setRerender} />;
    case 366:
      return <SnakeBites />;
    case 407:
      return <GoblinsFlee rerender={setRerender} />;
    default:
  }
}
