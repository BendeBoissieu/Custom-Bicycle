import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBicycles } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectWheel } from '../actions';
import { selectRim } from '../actions';

class CustomizeOptions extends Component {
  componentWillMount(){
    this.props.fetchBicycles();
  }

  handleClickRim = (objectRim) => {
    if(this.props.selectRim){this.props.selectRim(objectRim);}
  }
  handleClickWheel = (objectWheel) => {
    if(this.props.selectWheel){this.props.selectWheel(objectWheel);}
  }
  render(){
    var selectedWheel = this.props.selectedWheel.length === 0 ? {wheel_id: null, size: null} : this.props.selectedWheel

    var selectedRim = this.props.selectedRim.length === 0 ? {rim_id: null, color: null, color_hex: null} : this.props.selectedRim

    var wheels = this.props.bicycles.map((bicycle) => {
      if ( bicycle.rim.rim_id === selectedRim.rim_id || selectedRim.rim_id === null ){
        return(bicycle.wheel)
      }
    }).filter(item => item);

    var wheelsReduced= wheels.reduce((current,next)=>{
    if(!current.some(a=> a.wheel_id === next.wheel_id)){
        current.push(next);
    }
    return current;
    },[])


    var rimsColors = this.props.bicycles.map((bicycle) => {
      if ( bicycle.wheel.wheel_id === selectedWheel.wheel_id || selectedWheel.wheel_id === null ){
        return(bicycle.rim)
      }
    }).filter(item => item);

    var rimsColorsReduced = rimsColors.reduce((current,next)=>{
    if(!current.some(a=> a.color === next.color) ){
        current.push(next);
    }
    return current;
    },[])

    return(
      <div className="menu_customize">
        <p>Choose the size of the wheel</p>
        <ul className="nav inline-flex">
          {wheelsReduced.map((wheel) => {
            let classesWheels = "size-preview";
            if (wheel.wheel_id == this.props.selectedWheel.wheel_id) {
              classesWheels += " size-selected"
            }
            return(
              <li key={wheel.wheel_id} data-id={wheel.wheel_id} className={classesWheels} onClick={() => this.handleClickWheel({wheel_id: wheel.wheel_id, size: wheel.size})}>{wheel.size}</li>
            )
          })}
        </ul>
        <p>Choose a color rim</p>
        <ul className="nav inline-flex">
          {rimsColorsReduced.map((rim) => {
            let classesColors = "color-preview";
            if (rim.rim_id == selectedRim.rim_id) {
              classesColors += " color-selected"
            }
            if (!rim.color_hex){
              rim.color_hex =  rim.color
            }
            return(
              <li key={rim.rim_id} data-id={rim.rim_id} className={classesColors} style={{backgroundColor: rim.color_hex}} onClick={() => this.handleClickRim({rim_id: rim.rim_id, color: rim.color, color_hex: rim.color_hex})}></li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bicycles: state.bicycles,
    selectedWheel: state.wheels,
    selectedRim: state.rims
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchBicycles, selectWheel, selectRim }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps) (CustomizeOptions);
