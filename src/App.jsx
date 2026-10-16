import React, { useState } from "react";
import StudentList from "./Components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Amit Shah",
      email: "amit@gmail.com",
    },
    {
      id: 4,
      name: "Neha Patel",
      email: "neha@gmail.com",
    },
  ]);

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="app">
      <h1>Student Management System</h1>
      <p className="subtitle">Delete Operation</p>

      <StudentList
        students={students}
        onDelete={handleDelete}
      />

      <p className="total">
        Total Students: {students.length}
      </p>
    </div>
  );
}

export default App;