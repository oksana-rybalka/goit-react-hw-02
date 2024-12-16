import style from "./Options.module.css";
import React from "react";

const Options = ({ options, onLeaveFeedback, totalFeedback, onReset }) => {
  return (
    <div className={style.buttonsContainer}>
      {options.map((option) => (
        <button
          className={style.buttonOption}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={style.buttonOption} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
