import { Link } from "react-router-dom";
export default function Hello() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to="/home">
        <div
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <h3>Go to Home Page</h3>
        </div>
      </Link>
    </>
  );
}
