import "./FormStyle.css";
export default function Alert({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="alert">
        <div id="alert-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "Form submitted successfully!"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
