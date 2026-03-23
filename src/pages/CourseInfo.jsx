import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

function CourseInfo() {
  const navigate = useNavigate();
  const { formData, updateForm } = useRegistration();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!formData.course.trim()) {
      nextErrors.course = "Course is required";
    }

    if (!formData.lecturer.trim()) {
      nextErrors.lecturer = "Lecturer is required";
    }

    if (!formData.gp.trim()) {
      nextErrors.gp = "GP is required";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigate("/summary");
    }
  };

  return (
    <section className="page-layout single-column">
      <form className="form-card wide-form" onSubmit={handleSubmit}>
        <h2>Step 2: Course Details</h2>

        <div className="grid-two">
          <div>
            <label htmlFor="course">Course</label>
            <input
              id="course"
              type="text"
              placeholder="Example: CSC 405"
              value={formData.course}
              onChange={(event) => updateForm({ course: event.target.value })}
            />
            {errors.course ? <p className="error-text">{errors.course}</p> : null}
          </div>

          <div>
            <label htmlFor="lecturer">Lecturer</label>
            <input
              id="lecturer"
              type="text"
              placeholder="Enter lecturer name"
              value={formData.lecturer}
              onChange={(event) =>
                updateForm({ lecturer: event.target.value })
              }
            />
            {errors.lecturer ? (
              <p className="error-text">{errors.lecturer}</p>
            ) : null}
          </div>
        </div>

        <label htmlFor="gp">Current GP</label>
        <input
          id="gp"
          type="text"
          placeholder="Example: 4.20"
          value={formData.gp}
          onChange={(event) => updateForm({ gp: event.target.value })}
        />
        {errors.gp ? <p className="error-text">{errors.gp}</p> : null}

        <div className="button-row">
          <button
            className="secondary-btn"
            type="button"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button className="primary-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default CourseInfo;
