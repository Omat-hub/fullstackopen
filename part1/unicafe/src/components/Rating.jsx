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
          maxWidth: "25ch",
        }}
      >
        How would you rate your overall experience?
      </p>
      <Button onClick={handleGood} text="Good" color="green" />
      <Button onClick={handleNeutral} text="Neutral" color="gray" />
      <Button onClick={handleBad} text="Bad" color="red" />
    </div>
  );
};

export default Rating;
