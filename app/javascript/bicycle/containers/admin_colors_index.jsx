import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColors } from '../actions';
import { bindActionCreators } from 'redux';
import AdminMenuList from './admin_menu_list';
import { Link } from 'react-router-dom';

class AdminColorsIndex extends Component {
  componentWillMount(){
    this.props.fetchColors();
  }
  renderColors() {
    return this.props.colors.map((color) => {
      return(
        <tr key={color.id}>
          <td>{color.id}</td>
          <td>{color.name}</td>
          <td>{color.hexadecimal}</td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="flex-container">
        <AdminMenuList />
        <div className="admin-main">
          <h1>Colors available</h1>
          <Link className="btn btn-primary my-2" to="/admin/colors/new">
            Add a Color
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Hexadecimal</th>
              </tr>
            </thead>
            <tbody>
              {this.renderColors()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchColors }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminColorsIndex);
