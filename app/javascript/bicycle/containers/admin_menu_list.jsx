import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../components/admin';
import AdminColorsIndex from './admin_colors_index';
import AdminRimsIndex from './admin_rims_index';
import AdminWheelsIndex from './admin_wheels_index';

class AdminMenuList extends Component {
  render() {
    return(
      <div className="admin-sidenav">
        <Link to="/admin">Bicycles</Link>
        <Link to="/admin/rims">Rims</Link>
        <Link to="/admin/wheels">Wheels</Link>
        <Link to="/admin/colors">Colors</Link>
      </div>
    );
  }
}

export default AdminMenuList;
