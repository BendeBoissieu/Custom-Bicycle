import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCustomize from '../containers/menu_customize';
import { connect } from 'react-redux';

class NewOrder extends Component {
  render(){
    var selectedRim = this.props.selectedRim.length === 0 ? {rim_id: null, color: null, color_hex: null} : this.props.selectedRim
    var selectedWheel = this.props.selectedWheel.length === 0 ? {wheel_id: null, size: null} : this.props.selectedWheel
    if ( !selectedRim.color_hex ) {
      selectedRim.color_hex = selectedRim.color
    }

    return (
      <div className="container app-container" style={{maxWidth: '500px'}}>
        <div className="container_new_order">
          <h3 style={{marginBottom: '20px'}}>Thank you for your order</h3>
          <p>Size of the wheel: {selectedWheel.size}</p>
          <p>Color of the rim: {selectedRim.color}</p>
          <Link className="btn btn-validate" to="/">Back Home</Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedRim: state.rims,
    selectedWheel: state.wheels
  };
}

export default connect(mapStateToProps, null) (NewOrder);
