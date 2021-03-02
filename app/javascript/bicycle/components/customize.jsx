import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BicycleImage from 'images/bicycle.png'
import MenuCustomize from '../containers/menu_customize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createOrder } from '../actions';

class Customize extends Component {
  isClickable = () => {
    if(this.props.selectedRim.length === 0 || this.props.selectedWheel.length === 0) {
      return false
    } else { return true }
  }

  orderCreate = (selection) => {
    var arrayBicycle =  this.props.bicycles.filter(function(bicycle) {
    return (bicycle.wheel.wheel_id == selection.wheel_id && bicycle.rim.rim_id == selection.rim_id);
    });
    var bicycleSelected = ( arrayBicycle.length === 1 ) ? arrayBicycle[0]['id'] : null
    if (bicycleSelected) {this.props.createOrder(bicycleSelected, () => {
        this.props.history.push('/confirmation');
      });
    }
  }

  render(){
    var url_bicycle = '.././assets/images/bicycle.png';
    var selectedRim = this.props.selectedRim.length === 0 ? {rim_id: null, color: 'black', color_hex: null} : this.props.selectedRim

    if ( !selectedRim.color_hex ) {
      selectedRim.color_hex = selectedRim.color
    }
    var bicycle_preview = {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: '20px auto',
      backgroundColor: `${selectedRim.color_hex}`,
      display: 'block',
      maxWidth: '330px',
      border: '1px solid'
    }

    return (
      <div className="container">
        <div className="row margin-top-100 flex-container">
          <div className="col-xs-12 col-sm-6">
            <img src={BicycleImage} style={bicycle_preview}/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="options">
              <h3>Select an option</h3>
              <MenuCustomize />
            </div>
            <Link className="btn btn-validate" style={this.isClickable() ? null : {pointerEvents: "none"}} to="#" onClick={() => this.orderCreate({wheel_id: this.props.selectedWheel.wheel_id, rim_id: this.props.selectedRim.rim_id})}>Validate</Link>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedRim: state.rims,
    selectedWheel: state.wheels,
    bicycles: state.bicycles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createOrder }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps) (Customize);

