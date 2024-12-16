import style from "./Options.module.css";
import React from "react";

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
