import { useCallback, useEffect } from "react";

export function useHandleKeyDown(choices, pause, handleChoice) {
  const handleUserKeyPress = useCallback(
    (event) => {
      const key = event.key;
      if (key <= choices.length && key !== "0" && pause !== true) {
        const choice = choices[key - 1];
        if (choice.blocked) return;
        handleChoice(choice);
      }
    },
    [choices, handleChoice, pause]
  );

  useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress);
      return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
      };
    }, [handleUserKeyPress]);
} 

export default useHandleKeyDown