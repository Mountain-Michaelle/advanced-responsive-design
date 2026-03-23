import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

function StudentInfo() {
  const navigate = useNavigate();
  const { formData, updateForm } = useRegistration();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      nextErrors.email = "Enter a valid email";
    }

    if (!formData.level) {
      nextErrors.level = "Level is required";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigate("/course");
    }
  };

  return (
    <section className="page-layout">
      <div className="hero-card">
        <p className="eyebrow">Advanced Responsive Design</p>
        <h1>Course Registration</h1>
        <p className="hero-text">
          This first step demonstrates a responsive two-column layout with a
          flexible content area and a form that stacks nicely on smaller
          screens.
        </p>

        <img
          className="responsive-media"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          alt="Students learning together"
        />
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Step 1: Student Details</h2>

        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(event) => updateForm({ name: event.target.value })}
        />
        {errors.name ? <p className="error-text">{errors.name}</p> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(event) => updateForm({ email: event.target.value })}
        />
        {errors.email ? <p className="error-text">{errors.email}</p> : null}

        <label htmlFor="level">Level</label>
        <select
          id="level"
          value={formData.level}
          onChange={(event) => updateForm({ level: event.target.value })}
        >
          <option value="">Select level</option>
          <option value="100 Level">100 Level</option>
          <option value="200 Level">200 Level</option>
          <option value="300 Level">300 Level</option>
          <option value="400 Level">400 Level</option>
        </select>
        {errors.level ? <p className="error-text">{errors.level}</p> : null}

        <button className="primary-btn" type="submit">
          Next
        </button>
      </form>
    </section>
  );
}

export default StudentInfo;
