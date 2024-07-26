
import React from 'react';
import { Link } from 'react-router-dom';
import"./App.css"

const App = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default App;
