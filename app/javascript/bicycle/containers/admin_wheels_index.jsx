import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWheels } from '../actions';
import { bindActionCreators } from 'redux';
import AdminMenuList from './admin_menu_list';
import { Link } from 'react-router-dom';

class AdminWheelsIndex extends Component {
  componentWillMount(){
    this.props.fetchWheels();
  }
  renderWheels() {
    return this.props.wheels.map((wheel) => {
      return(
        <tr key={wheel.id}>
          <td>{wheel.id}</td>
          <td>{wheel.size}</td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="admin-main">
        <div className="container">
          <h1>Wheels available</h1>
          <Link className="btn btn-primary my-2" to="/admin/wheels/new">
            Add a Wheel
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {this.renderWheels()}
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
    wheels: state.wheels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWheels }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminWheelsIndex);
