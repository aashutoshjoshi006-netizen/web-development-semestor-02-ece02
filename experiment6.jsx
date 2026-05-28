

import React, { useState, useEffect } from "react";

function App() {

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error State
  const [errors, setErrors] = useState({});

  // API Data State
  const [users, setUsers] = useState([]);

  // Fetch API Data using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Registration Successful");

      // Clear Form
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Register</button>

      </form>

      <hr />

      <h2>Fetched API Data</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;