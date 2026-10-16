import React from "react";

function StudentList({ students, onDelete }) {
  return (
    <div className="student-container">
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;