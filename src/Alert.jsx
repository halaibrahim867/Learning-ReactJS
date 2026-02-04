import "./FormStyle.css";
export default function Alert({ message }) {
  return (
    <div id="alert">
      <div id="alert-content">
        <h1>{message}</h1>
      </div>
    </div>
  );
}
