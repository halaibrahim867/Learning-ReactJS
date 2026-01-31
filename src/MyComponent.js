import "./ComponentStyle.css";
export default function MyComponent() {
  const x = 10;
  const person = { name: "Alice", age: 25 };
  const elementStyle = {
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div>
      <h2 style={elementStyle}>{x} This is MyComponent!</h2>{" "}
      {/* pass json object insdie jsx brackets */}
      <p>Welcome to my first React component.</p>
      <p className={"active redBg"}>Name: {person.name}</p>
      <h1 className={person.name == "Hala" ? "redBg" : "greenBg"}>
        Check Name
      </h1>
      <button onClick={sayHello}>Click Me</button>{" "}
      {/* pass name of method of componet*/}
    </div>
  );
}

function sayHello() {
  alert("Hello from MyComponent!");
}
