import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRims } from '../actions';
import { bindActionCreators } from 'redux';
import AdminMenuList from './admin_menu_list';
import { Link } from 'react-router-dom';

class AdminRimsIndex extends Component {
  componentWillMount(){
    this.props.fetchRims();
  }
  renderRims() {
    return this.props.rims.map((rim) => {
      return(
        <tr key={rim.id}>
          <td>{rim.id}</td>
          <td>{rim.color.name}</td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="admin-main">
        <div className="container">
          <h1>Rims available</h1>
          <Link className="btn btn-primary my-2" to="/admin/rims/new">
            Add a Rim
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRims()}
            </tbody>
          </table>
          <AdminMenuList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rims: state.rims
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchRims }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminRimsIndex);
