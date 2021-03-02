import React from 'react';
import { Link } from 'react-router-dom';
import BicycleAnnimation from 'images/bicycle_annimation.gif'

const App = () => {
  return (
    <div className="container">
      <div className="app-container">
        <h1 style={{marginBottom: '20px'}}>Welcome to Pandabize</h1>
        <Link className="btn btn-enter" to="/customize">START</Link>
        <img src={BicycleAnnimation} style={{width:'300px', display: 'block', margin: 'auto'}}/>
      </div>
    </div>
  );
};

export default App;
