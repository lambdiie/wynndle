function GuessItem({ text, hint = "", classes }) {
  return (
    <div className={`guess-item ${classes}`}>
      <p>
        {text === "" || (Array.isArray(text) && text.length === 0) ? "None" : text} {hint}
      </p>
    </div>
  );
}

export default GuessItem;