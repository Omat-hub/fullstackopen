import FeedbackLine from "./FeedbackLine";

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
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Live feedback from our customers
      </p>

      <table
        style={{
          minWidth: "350px",
          color: " #000000ff",
        }}
      >
        <thead
          style={{
            backgroundColor: " #a3a29fff",
          }}
        >
          <tr>
            <th>Stats</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody
          style={{
            backgroundColor: " #e4e4e4ff",
          }}
        >
          <FeedbackLine text="Good" value={good} />
          <FeedbackLine text="Neutral" value={neutral} />
          <FeedbackLine text="Bad" value={bad} />
          <FeedbackLine text="Total Feedback" value={totalClicks} />
          <FeedbackLine text="Average Score" value={averageScore.toFixed(2)} />
          <FeedbackLine
            text="Positive Feedback: "
            value={positivePercentage.toFixed(2) + " %"}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
