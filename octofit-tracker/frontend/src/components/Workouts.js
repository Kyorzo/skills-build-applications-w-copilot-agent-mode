import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API:', API_URL, data);
        setWorkouts(data.results || data);
      });
  }, []);
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <table className="table table-striped">
          <thead><tr><th>Name</th><th>Description</th><th>Suggested For</th></tr></thead>
          <tbody>
            {workouts.map((w, i) => (
              <tr key={i}>
                <td>{w.name}</td>
                <td>{w.description}</td>
                <td>{w.suggested_for?.map(u => u.name).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Workouts;
