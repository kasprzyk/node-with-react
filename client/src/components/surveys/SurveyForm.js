import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey title', name: 'title' },
  { label: 'Subject line', name: 'subject' },
  { label: 'Email body', name: 'body' },
  { label: 'Recipient list', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <link to='surveys' className='red btn-flat white-text'></link>
          <button className='teal btn-flat right white-text' type='submit'>
            Submit
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
