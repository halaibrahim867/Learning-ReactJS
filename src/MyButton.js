import { useState } from "react";

export default function MyButton() {
  const [name, setName] = useState("Ahmed");
  function buttonClicked() {
    name === "Hala" ? setName("Ahmed") : setName("Hala");
  }
  return (
    <>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </>
  );
}
