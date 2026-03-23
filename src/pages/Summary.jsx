import React from "react";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

function Summary() {
  const navigate = useNavigate();
  const { formData, resetForm } = useRegistration();

  const handleNewRegistration = () => {
    resetForm();
    navigate("/");
  };

  return (
    <section className="page-layout single-column">
      <div className="summary-card">
        <h2>Registration Summary</h2>

        <div className="summary-grid">
          <div className="summary-item">
            <span>Name</span>
            <strong>{formData.name || "-"}</strong>
          </div>
          <div className="summary-item">
            <span>Email</span>
            <strong>{formData.email || "-"}</strong>
          </div>
          <div className="summary-item">
            <span>Level</span>
            <strong>{formData.level || "-"}</strong>
          </div>
          <div className="summary-item">
            <span>Course</span>
            <strong>{formData.course || "-"}</strong>
          </div>
          <div className="summary-item">
            <span>Lecturer</span>
            <strong>{formData.lecturer || "-"}</strong>
          </div>
          <div className="summary-item">
            <span>GP</span>
            <strong>{formData.gp || "-"}</strong>
          </div>
        </div>

        <button className="primary-btn" type="button" onClick={handleNewRegistration}>
          Register Another Course
        </button>
      </div>
    </section>
  );
}

export default Summary;
