import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Feedback/Feedback";
import "./App.css";
import Notification from "./Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutlal={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </>
    </div>
  );
}

export default App;
