import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Users API:', API_URL, data);
        setUsers(data.results || data);
      });
  }, []);
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Users</h2>
        <table className="table table-striped">
          <thead><tr><th>Name</th><th>Email</th><th>Team</th></tr></thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.team?.name || u.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
