import { useState } from "react";
export default function MyInput() {
  const [myInputValue, setMyInputValue] = useState("");
  function handleChange(event) {
    setMyInputValue(event.target.value);
  }
  return (
    <>
      <label>Your Name:</label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your name here"
        value={myInputValue}
      />
    </>
  );
}
