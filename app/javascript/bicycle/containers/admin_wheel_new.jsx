import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createWheel } from '../actions';

class WheelsNew extends Component {
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
    this.props.createWheel(values, () => {
      this.props.history.push('/admin/wheels');
    });
  }

  // in this form we need to create function onSubmit that will call the action post
  render() {
    return (
      <div className="container_form">
        <h3 className="margin-bottom-20">Add a new wheel</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Size"
            name="size"
            type="text"
            component={this.renderField}
          />
          <div className="buttons">
            <button className="btn btn-enter my-2 float-left" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Add the wheel
            </button>
            <Link to={'/admin/wheels'} className="btn btn-secondary my-2" style={{float: 'right'}}>
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newWheelForm'
})(
  connect(null, { createWheel })(WheelsNew)
);
