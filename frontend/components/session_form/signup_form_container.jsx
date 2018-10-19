import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {receiveNoErrors} from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/signup">signup</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveNoErrors()),
    processDemo: (user) => dispatch(login(user))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
