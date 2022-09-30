import { useSelector } from "react-redux";
import BackpackRobbed from "../components/miniGames/BackpackRobbed";
import CreateStats2 from "../components/CreateStats2";
import KillSnakes from "../components/miniGames/KillSnakes";
import MakeGoblins from "../components/miniGames/MakeGoblins";
import NightCreatures from "../components/miniGames/NightCreatures";
import RollDie from "../components/miniGames/RollDie";
import TrollDice from "../components/miniGames/TrollDice";
import { getNightCreaturePrevious } from "../redux/story/selectors";

export function useMapWhatToDo(
  pageNumber,
  cancelPause,
  pauseChoices,
  stayShowing
) {
  const _nightCreaturePrevious = useSelector(getNightCreaturePrevious);

  if (!pauseChoices && !stayShowing) return;

  let alreadyMapped = false;
  if (alreadyMapped) return;
  switch (pageNumber) {
    case 1002:
      return <CreateStats2 cancelPause={cancelPause} />;
    case 270:
      return <RollDie cancelPause={cancelPause} pageType={"beeStings"} />;
    case 417:
      return <RollDie cancelPause={cancelPause} pageType={"snakeBites"} />;
    case 218:
      return <BackpackRobbed cancelPause={cancelPause} />;
    case 38:
      return <TrollDice cancelPause={cancelPause} />;
    case 165:
      return <KillSnakes cancelPause={cancelPause} />;
    case 425:
    case 369:
      return <MakeGoblins cancelPause={cancelPause} />;
    case 123:
      return (
        <NightCreatures
          key={_nightCreaturePrevious}
          cancelPause={cancelPause}
        />
      );
    default:
  }
  // Does this do anything? 
  alreadyMapped = true;
}
