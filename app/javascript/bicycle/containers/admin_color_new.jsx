import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createColor } from '../actions';

class ColorsNew extends Component {
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
    this.props.createColor(values, () => {
      this.props.history.push('/admin/colors');
    });
  }

  // in this form we need to create function onSubmit that will call the action post
  render() {
    return (
      <div className="container_form">
        <h3 className="margin-bottom-20">Add a new color</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Name"
            name="name"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Hexadecimal code"
            name="hexadecimal"
            type="text"
            component={this.renderField}
          />
          <div className="buttons">
            <button className="btn btn-enter my-2 float-left" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Add the color
            </button>
            <Link to={'/admin/colors'} className="btn btn-secondary my-2" style={{float: 'right'}}>
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newColorForm'
})(
  connect(null, { createColor })(ColorsNew)
);
