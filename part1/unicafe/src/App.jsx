import { useState } from "react";
import Rating from "./components/Rating";
import Feedback from "./components/Feedback";

const App = () => {
  // save clicks of each button to its own state
  const [click, setClick] = useState({ good: 0, neutral: 0, bad: 0 });

  const heading = "At Unicafe, we value your opinion";

  const handleGood = () => {
    const newClick = {
      ...click,
      good: click.good + 1,
    };
    setClick(newClick);
  };
  const handleNeutral = () => {
    const newClick = {
      ...click,
      neutral: click.neutral + 1,
    };
    setClick(newClick);
  };
  const handleBad = () => {
    const newClick = {
      ...click,
      bad: click.bad + 1,
    };
    setClick(newClick);
  };
  console.log(click);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBlock: "10rem",
        border: "1px black solid",
        borderRadius: "5px",
        padding: "10px",
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

      <Feedback good={click.good} neutral={click.neutral} bad={click.bad} />
    </div>
  );
};

export default App;
