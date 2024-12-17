import styles from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercent,
}) => {
  return (
    <div className={styles.containerFeedback}>
      <p className={styles.textFeedback}>
        Good: <span className={styles.number}>{good}</span>
      </p>
      <p className={styles.textFeedback}>
        Neutral: <span className={styles.number}>{neutral}</span>
      </p>
      <p className={styles.textFeedback}>
        Bad: <span className={styles.number}>{bad}</span>
      </p>
      <p className={styles.textFeedback}>
        Total: <span className={styles.number}>{totalFeedback}</span>
      </p>
      <p className={styles.textFeedback}>
        Positiv:{" "}
        <span className={styles.number}>{positiveFeedbackPercent}%</span>
      </p>
    </div>
  );
};
export default Feedback;
