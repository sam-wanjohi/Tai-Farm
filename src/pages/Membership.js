import React, { useState, useEffect } from 'react';

const Membership = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from API
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleEnroll = (courseId) => {
    // Handle course enrollment logic
    alert(`Enrolling in course with ID: ${courseId}`);
  };

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => handleEnroll(course.id)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Membership;
