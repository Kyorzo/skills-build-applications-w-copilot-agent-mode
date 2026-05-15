import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboards/`;

function Leaderboard() {
  const [leaderboards, setLeaderboards] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API:', API_URL, data);
        setLeaderboards(data.results || data);
      });
  }, []);
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <table className="table table-striped">
          <thead><tr><th>Team</th><th>Points</th></tr></thead>
          <tbody>
            {leaderboards.map((l, i) => (
              <tr key={i}>
                <td>{l.team?.name || l.team}</td>
                <td>{l.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Leaderboard;
