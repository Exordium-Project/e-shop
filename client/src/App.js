import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios.get('/api/users/getAllUsers')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
     <h2>Exordium Project</h2>
      <SearchBar></SearchBar>
      {users.map(user => {
        return <p>{user.username}</p>
      })}
    </div>
  );
}

export default App;
