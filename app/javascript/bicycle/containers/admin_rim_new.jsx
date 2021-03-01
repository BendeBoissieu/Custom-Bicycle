import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { createRim } from '../actions';
import { fetchColors } from '../actions';

class RimNew extends Component {
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
    this.props.createRim(values, () => {
      this.props.history.push('/admin/rims');
    });
  }

  componentWillMount(){
    this.props.fetchColors();
  }
  renderSelectColors() {
    return this.props.colors.map((color) => {
      return(
        <option key={color.id} value={color.id}>{color.name}</option>
      )
    });
  }
  render() {
    return (
      <div className="container_form">
        <h3 className="margin-bottom-20">Add a new rim</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label>Choose the Color</label>
          <div>
            <Field name="color_id" component="select">
              <option>Select a color</option>
              {this.renderSelectColors()}
            </Field>
          </div>
          <div className="buttons">
            <button className="btn btn-enter my-2 float-left" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Add the rim
            </button>
            <Link to={'/admin/rims'} className="btn btn-secondary my-2" style={{float: 'right'}}>
              Back
            </Link>
          </div>
        </form>
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

RimNew = connect(
  mapStateToProps,
  mapDispatchToProps
)(RimNew)

export default reduxForm({
  form: 'newRimForm',
  createRim
})(RimNew)
