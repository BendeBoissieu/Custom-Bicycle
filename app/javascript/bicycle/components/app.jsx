import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <div className="app-container">
        <h1 style={{marginBottom: '20px'}}>Welcome to Pandabize</h1>
        <Link className="btn btn-enter" to="/customize">START</Link>
      </div>
    </div>
  );
};

export default App;
