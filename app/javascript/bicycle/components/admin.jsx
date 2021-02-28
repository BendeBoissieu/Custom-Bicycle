import React from 'react';
import AdminBicyclesIndex from '../containers/admin_bicycles_index';
import AdminMenuList from '../containers/admin_menu_list';

const Admin = () => {
  return (
    <div className="flex-container">
      <AdminMenuList />
      <AdminBicyclesIndex />
    </div>
  );
};

export default Admin;
