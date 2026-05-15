import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API:', API_URL, data);
        setActivities(data.results || data);
      });
  }, []);
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Activities</h2>
        <table className="table table-striped">
          <thead><tr><th>User</th><th>Type</th><th>Duration</th><th>Date</th></tr></thead>
          <tbody>
            {activities.map((a, i) => (
              <tr key={i}>
                <td>{a.user?.name || a.user}</td>
                <td>{a.type}</td>
                <td>{a.duration}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Activities;
