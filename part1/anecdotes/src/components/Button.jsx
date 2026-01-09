const Button = ({ onClick, text, color }) => {
  return (
    <>
      <button
        style={{
          paddingBlock: "15px",
          paddingInline: "20px",
          backgroundColor: color,
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          marginTop: "20px",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
