import React from "react";

const SpareAssassin = ({ playerHP, enemyHP, spareHim }) => {
  const canSpareHim = () => !(playerHP >= 6 && enemyHP <= 3 && enemyHP > 0)

  return (
    <button
      className="btn border"
      disabled={canSpareHim()}
      onClick={spareHim}
    >
      Spare Him
    </button>
  );
};

export default SpareAssassin;
