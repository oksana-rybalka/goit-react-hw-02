import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ good, neutral, bad, Totalfeedback }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{Totalfeedback}</p>
    </div>
  );
};
export default Feedback;
