import Button from "./Button";

const Rating = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        gap: "0.5rem",
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          maxWidth: "26ch",
        }}
      >
        How would you rate your overall experience?
      </p>
      <Button onClick={handleGood} text="Good" color="#10dc10ff" />
      <Button onClick={handleNeutral} text="Neutral" color="#b7b5b5ff" />
      <Button onClick={handleBad} text="Bad" color="#fc4545ff" />
    </div>
  );
};

export default Rating;
