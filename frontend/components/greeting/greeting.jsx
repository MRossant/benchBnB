import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    render () {
        const { currentUser, logout } = this.props;

        const display = currentUser ? (
        <div>
            <p>Greeting, {currentUser.username}!</p>
            <button onClick={logout}>Log Out</button>
        </div>
        ) : (
        <div>
            <Link className='btn' to="/signup">Sign Up</Link>
            <Link className='btn' to="/login">Log In</Link>
        </div>
        );

        return (
        <div>
            {display}
        </div>
        )
    }
}

export default Greeting;