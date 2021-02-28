import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <div style={{textAlign: "center", marginTop: "40vh"}}>
        <h1>Welcome to Pandabize</h1>
        <Link className="btn btn-enter" to="/customize">Enter</Link>
      </div>
    </div>
  );
};

export default App;
