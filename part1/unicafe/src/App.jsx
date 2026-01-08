import { useState } from "react";
import Rating from "./components/Rating";
import Feedback from "./components/Feedback";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const heading = "At Unicafe, we value your opinion";

  const totalClicks = good + neutral + bad;
  const positivePercentage = totalClicks > 0 ? (good / totalClicks) * 100 : 0;
  const averageScore =
    totalClicks > 0 ? (good * 1 + neutral * 0 + bad * -1) / totalClicks : 0;

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  console.log(good, neutral, bad);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBlock: "10rem",
        border: "2px black solid",
        borderRadius: "5px",
        padding: "5px",
        maxWidth: "max-content",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
        {heading}
      </h1>
      <Rating
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />

      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        totalClicks={totalClicks}
        positivePercentage={positivePercentage}
        averageScore={averageScore}
      />
    </div>
  );
};

export default App;
