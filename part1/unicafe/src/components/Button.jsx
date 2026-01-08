const Button = ({ onClick, text, color }) => {
  return (
    <>
      <button
        style={{
          paddingBlock: "10px",
          paddingInline: "20px",
          backgroundColor: color,
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
