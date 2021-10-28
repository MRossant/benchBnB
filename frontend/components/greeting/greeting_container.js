import Greeting from './greeting';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

const mSTP = (state) => {
    const sessionId = state.session.id
    return {
        currentUser: state.entities.users[sessionId]
    }
};

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
});

export default connect(mSTP, mDTP)(Greeting);