import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

// Used in createStats
const InputNumber = ({
  stat,
  maxStat,
  minStat,
  statPoints,
  setStatPoints,
  onChange,
  increment,
}) => {
  const inc = () => {
    if (stat + increment <= maxStat && statPoints > 0) {
      onChange(stat + increment);
      setStatPoints((p) => p - 1);
    }
  };
  const dec = () => {
    if (stat - increment >= minStat) {
      onChange(stat - increment);
      setStatPoints((p) => p + 1);
    }
  };
  const max = () => {
    if (stat + increment <= maxStat && statPoints > 0) {
      let newStat = stat;
      const difference = maxStat - stat
      newStat += difference <= (statPoints * increment) ? difference : statPoints * increment;
      const pointsSpent = (newStat - stat) / increment
      setStatPoints((p) => p - pointsSpent);
      onChange(newStat);
    }
  };
  const min = () => {
    if (stat - increment >= minStat) {
      const invested = (stat - minStat) / increment;
      setStatPoints((p) => p + invested);
      onChange(minStat);
    }
  };

  return (
    <InputGroup>
      <InputGroup.Prepend
        onClick={min}
        className="cursor-pointer"
        disabled={stat <= minStat}
      >
        <InputGroup.Text>
          <strong>Min</strong>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <InputGroup.Prepend
        onClick={dec}
        className="cursor-pointer"
        disabled={stat <= minStat}
      >
        <InputGroup.Text>
          <strong>-</strong>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <FormControl
        plainText
        readOnly
        value={`${stat} / ${maxStat}`}
        className="text-center bg-white"
      />

      <InputGroup.Append onClick={inc} className="cursor-pointer">
        <InputGroup.Text>
          <strong>+</strong>
        </InputGroup.Text>
      </InputGroup.Append>

      <InputGroup.Append onClick={max} className="cursor-pointer">
        <InputGroup.Text>
          <strong>Max</strong>
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default InputNumber;
