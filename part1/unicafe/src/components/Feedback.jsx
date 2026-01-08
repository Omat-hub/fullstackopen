const Feedback = ({ good, neutral, bad }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Live feedback from our customers:
      </p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Feedback;
