import { useState } from "react";
export default function MyForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    info: "",
    isStudent: false,
    city: "",
    gender: "",
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <label>Your Name:</label>
        <input
          placeholder="Enter your name here"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br /> <br />
        <label>Email:</label>
        <input
          placeholder="Enter your email here"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br /> <br />
        <label>Age:</label>
        <input
          placeholder="Enter your age here"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <br /> <br />
        <label>General Info:</label>
        <textarea
          placeholder="Enter some general info about you"
          value={formData.info}
          onChange={(e) => setFormData({ ...formData, info: e.target.value })}
        />
        <br /> <br />
        <label>Are you a student?</label>
        <input
          type="checkbox"
          checked={formData.isStudent}
          onChange={(e) =>
            setFormData({ ...formData, isStudent: e.target.checked })
          }
        />
        <br /> <br />
        <select
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        >
          <option value="">Select a city</option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Luxor">Luxor</option>
        </select>
        <br /> <br />
        <div>
          <input
            type="radio"
            name="gender"
            checked={formData.gender === "male"}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            value="male"
          />
          <label> Male </label>
          <input
            type="radio"
            name="gender"
            checked={formData.gender === "female"}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            value="female"
          />
          <label> Female </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
