const MostVote = ({ mostVotedAnecdote, votes }) => {
  const maxVotes = votes ? Math.max(...votes) : 0;

  if (maxVotes === 0) {
    return <div style={{ marginTop: "20px" }}> No votes yet</div>;
  }
  return (
    <div>
      <h2 style={{ fontWeight: "bold", color: "#333" }}>
        Anecdote with most votes
      </h2>
      <p>{mostVotedAnecdote}</p>
      <span
        style={{
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontSize: "2rem",
          padding: "5px 10px",
          borderRadius: "8px",
        }}
      >
        {maxVotes} votes
      </span>
    </div>
  );
};

export default MostVote;
