import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BicycleImage from 'images/bicycle.png'
import MenuCustomize from '../containers/menu_customize';
import { connect } from 'react-redux';

class Customize extends Component {
  render(){
    var url_bicycle = '.././assets/images/bicycle.png';
    var selectedRim = this.props.selectedRim.length === 0 ? {rim_id: null, color: 'black', color_hex: null} : this.props.selectedRim

    if ( !selectedRim.color_hex ) {
      selectedRim.color_hex = selectedRim.color
    }
    var bicycle_preview = {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: 'auto',
      backgroundColor: `${selectedRim.color_hex}`,
      display: 'block',
      maxWidth: '330px',
      border: '1px solid'
    }

    return (
      <div className="container">
        <div className="row margin-top-100">
          <div className="col-xs-12 col-sm-6">
            <img src={BicycleImage} style={bicycle_preview}/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="options">
              <h3>Select an option</h3>
              <MenuCustomize />
              <Link className="btn btn-secondary btn-validate" to="/app">Validate</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedRim: state.rims
  };
}

export default connect(mapStateToProps, null) (Customize);

