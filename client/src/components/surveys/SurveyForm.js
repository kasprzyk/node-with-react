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
          <Field type='text' name='surveyTitle' component='input' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
