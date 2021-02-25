import React from 'react';
import AdminBicyclesIndex from '../containers/admin_bicycles_index';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 col-xs-12">
        </div>
        <div className="col-sm-5 col-xs-12">
          <h1>App</h1>
          <h2>Bicycle</h2>
          <AdminBicyclesIndex />
        </div>
      </div>
    </div>
  );
};

export default App;
