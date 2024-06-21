import React, { useState, useEffect } from 'react';

const BookingSystem = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from API
    fetch('/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  const handleBooking = (activityId) => {
    // Handle booking logic
    alert(`Booking activity with ID: ${activityId}`);
  };

  return (
    <div>
      <h2>Available Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            {activity.name} - ${activity.price}
            <button onClick={() => handleBooking(activity.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSystem;
