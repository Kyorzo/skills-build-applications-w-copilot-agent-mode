import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API:', API_URL, data);
        setTeams(data.results || data);
      });
  }, []);
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Teams</h2>
        <table className="table table-striped">
          <thead><tr><th>Name</th></tr></thead>
          <tbody>
            {teams.map((t, i) => (
              <tr key={i}>
                <td>{t.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Teams;
