function GuessItem({ text, hint = "", classes }) {
  return (
    <div className={`guess-item ${classes}`}>
      {text === "" || (Array.isArray(text) && text.length === 0)
        ? "None"
        : text}{" "}
      {hint}
    </div>
  );
}

export default GuessItem;
