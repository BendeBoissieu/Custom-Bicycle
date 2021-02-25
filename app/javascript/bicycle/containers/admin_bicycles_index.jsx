import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBicycles } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class AdminBicyclesIndex extends Component {
  componentWillMount(){
    this.props.fetchBicycles();
  }
  renderBicycles() {
    return this.props.bicycles.map((bicycle) => {
      return(
        <tr key={bicycle.id}>
          <td>{bicycle.id}</td>
          <td>{bicycle.rim.color}</td>
          <td>{bicycle.wheel.size}</td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="admin-main">
        <div className="container">
          <h1>Admin Bicycle</h1>
          <Link className="btn btn-primary my-2" to="/admin/bicycles/new">
            Add a Bicycle
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Color Rim</th>
                <th>Wheel Size</th>
              </tr>
            </thead>
            <tbody>
              {this.renderBicycles()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bicycles: state.bicycles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchBicycles }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminBicyclesIndex);
