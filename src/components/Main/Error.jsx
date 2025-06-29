import "./Error.css";

function Error({ error }) {
    console.log(error)

  return (
    <div role="alert">
      <p>Oops! Something went wrong: </p>
      <pre>{error.stack}</pre>
      <p>If you see this page, I screwed something up. Contact @diie123 on discord with the error and I'll try to fix it!</p>
    </div>
  );
}

export default Error;
