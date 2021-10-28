import {login, logOutCurrentUser} from '../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
})