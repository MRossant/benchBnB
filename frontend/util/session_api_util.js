// create a user
export const postUser = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
);

// creating a session
export const postSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

// deleting a user
export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);