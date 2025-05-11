import "./Input.css";
import magnify from "./assets/magnify.svg";

function Input() {
  return (
    <div className="input-container">
      <form autoComplete="off">
        <input
          type="text"
          placeholder="Type here to guess!"
          id="input"
          name="input"
        />
        <button class="submit" type="submit">
          <img src={magnify} alt="" width="16" height="16" />
        </button>
      </form>
    </div>
  );
}

export default Input;
