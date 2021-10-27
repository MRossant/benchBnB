import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const _initialErrorState = {
    session: []
}

const sessionsErrorsReducer = (state = _initialErrorState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, { session: action.errors });
        case RECEIVE_CURRENT_USER:
            return _initialErrorState;
        default:
            return state;
    }
}

export default sessionsErrorsReducer;