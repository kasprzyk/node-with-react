import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className='yellow white-text btn-flat' onClick={onCancel}>
        Cancel
      </button>
      <button
        onClick={() => submitSurvey(formValues)}
        className='green btn-flat right white-text'
      >
        Send survey <i className='material icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
