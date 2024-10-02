import React, { useState } from "react";
import axios from "axios";

function Backend() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sampleData = { name, age, email };
    console.log(sampleData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/sample",
        sampleData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="d-flex flex-column">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-25 my-2"
        />
      </div>
      <div className="d-flex flex-column">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-25 my-2"
        />
      </div>
      <div className="d-flex flex-column">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-25 my-2"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Backend;
