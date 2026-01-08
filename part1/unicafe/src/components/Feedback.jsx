const Feedback = ({
  good,
  neutral,
  bad,
  totalClicks,
  positivePercentage,
  averageScore,
}) => {
  if (totalClicks === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Drop your review to see the statistics.
        </p>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Live feedback from our customers:
        </p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <p>Total Feedback: {totalClicks}</p>
        <p>Positive Feedback: {positivePercentage.toFixed(1)}%</p>
        <p>Average Score: {averageScore.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Feedback;
