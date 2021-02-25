import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { createBicycle } from '../actions';
import { fetchRims } from '../actions';
import { fetchWheels } from '../actions';

class BicycleNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createBicycle(values, () => {
      this.props.history.push('/admin');
    });
  }

  componentWillMount(){
    this.props.fetchRims();
    this.props.fetchWheels();
  }
  renderSelectRims() {
    return this.props.rims.map((rim) => {
      return(
        <option key={rim.id} value={rim.id}>{rim.color.name}</option>
      )
    });
  }
  renderSelectWheels() {
    return this.props.wheels.map((wheel) => {
      return(
        <option key={wheel.id} value={wheel.id}>{wheel.size}</option>
      )
    });
  }
  render() {
    return (
      <div className="container_new_element">
        <h2 style={{textAlign: 'center'}}>Add a new bicycle</h2>
        <div className="new_Bicycle">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label>Choose the Rim color</label>
            <div>
              <Field name="rim_id" component="select">
                <option>Choose a color</option>
                {this.renderSelectRims()}
              </Field>
            </div>
            <label>Choose the Wheel size</label>
            <div>
              <Field name="wheel_id" component="select">
                <option>Choose a size</option>
                {this.renderSelectWheels()}
              </Field>
            </div>
            <button className="btn btn-primary my-2" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Add the bicycle
            </button>
            <Link to={'/admin/bicycles'} className="btn btn-secondary my-2" style={{float: 'right'}}>
              Back
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rims: state.rims,
    wheels: state.wheels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchRims, fetchWheels}, dispatch );
};

BicycleNew = connect(
  mapStateToProps,
  mapDispatchToProps
)(BicycleNew)

export default reduxForm({
  form: 'newBicycleForm',
  createBicycle
})(BicycleNew)
