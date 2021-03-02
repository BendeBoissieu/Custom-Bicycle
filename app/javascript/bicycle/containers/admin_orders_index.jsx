import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions';
import { bindActionCreators } from 'redux';
import AdminMenuList from './admin_menu_list';
import { Link } from 'react-router-dom';
import moment from 'moment';

class AdminOrdersIndex extends Component {
  componentWillMount(){
    this.props.fetchOrders();
  }
  renderOrders() {

    return this.props.orders.map((order) => {
      return(
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.bicycle_id}</td>
          <td>{moment(order.created_at).format('DD/MM/YYYY')}</td>
        </tr>
      )
    });
  }

  render() {
    return(
      <div className="flex-container">
        <AdminMenuList />
        <div className="admin-main">
          <h1>Admin Order</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Bicycle id</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              {this.renderOrders()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchOrders }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrdersIndex);
