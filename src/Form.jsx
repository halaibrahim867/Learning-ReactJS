import { useState } from "react";
import Alert from "./Alert.jsx";
import "./FormStyle.css";
export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const [submitted, setSubmitted] = useState(false);
  function isAgeValid() {
    const age = Number(formData.age);
    return age >= 18 && age <= 60;
  }

  function isPhoneValid() {
    return formData.phone.length === 10;
  }
  function CheckAllData() {
    if (
      formData.name &&
      formData.phone &&
      formData.age &&
      formData.salary &&
      formData.isEmployee
    ) {
      return true;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgeValid() && isPhoneValid()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <form
        id="loan-form"
        onSubmit={handleSubmit}
        className="form-container"
        style={{ flexDirection: "column" }}
      >
        <h1>Loan Application Form</h1>
        <hr />
        {submitted && <Alert message="Form submitted successfully!" />}
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <label>Phone Number</label>
        <input
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />

        <label>Age</label>
        <input
          value={formData.age}
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value });
          }}
        />
        <label style={{ marginTop: "30px" }}>Are you employee?</label>
        <input
          type="checkbox"
          checked={formData.isEmployee}
          onChange={(e) =>
            setFormData({ ...formData, isEmployee: e.target.checked })
          }
        />
        <label>Salary</label>
        <select
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        >
          <option value="below-50k">less than 500$</option>
          <option value="500$-2000$">between 500$ and 2000$</option>
          <option value="above-2000$">above 2000$</option>
        </select>
        <button id="submit-btn" type="submit" disabled={!CheckAllData()}>
          Submit
        </button>
      </form>
      <Alert message="Form submitted successfully!" />
    </div>
  );
}
