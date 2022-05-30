
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from "./components/search-bar/search-bar";

function App() {

  return (
    <div className="App">

        <Header />

     <h2>Exordium Project</h2>
      <SearchBar></SearchBar>
      {users.map(user => {
        return <p>{user.username}</p>
      })}

    </div>
  );
}

export default App;
