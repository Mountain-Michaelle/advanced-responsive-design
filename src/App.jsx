import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import StudentInfo from './pages/StudentInfo';
import CourseInfo from './pages/CourseInfo';
import Summary from './pages/Summary';
function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<StudentInfo />} /> 
          <Route path="/course" element={<CourseInfo />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
