import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          type='text'
          name='title'
          label='Survey title'
          component={SurveyField}
        />
        <Field
          type='text'
          name='title'
          label='Subject line'
          component={SurveyField}
        />
        <Field
          type='text'
          name='Email body'
          label='body'
          component={SurveyField}
        />
        <Field
          type='text'
          name='Recipient list'
          label='title'
          component={SurveyField}
        />
      </div>
    );
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
