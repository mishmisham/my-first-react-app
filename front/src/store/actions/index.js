export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = {
        lorem: 'chocopie'
    }

    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = {
        lorem: 'ipsum'
    }

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res,
    });
}

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = {
        lorem: 'opossum'
    }

    dispatch({
        type: FETCH_ADMINS,
        payload: res,
    });
}