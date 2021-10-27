import Greeting from './greeting';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

const mSTP = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(Greeting);