import {post} from "../../../actions/connection";
import * as connection from '../../../_helpers/firebase';

export const register = (username,password) => (dispatch, getState) => {
    dispatch({type: 'ACCOUNT_REGISTER_REQUEST'});
    return connection.register(username, password)
        .then(x => {
            dispatch({type: 'ACCOUNT_REGISTER_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'ACCOUNT_REGISTER_FAILURE',payload: x});
            return Promise.reject(x);
        })
}

export const sendEmailVerification = () => (dispatch, getState) => {
    dispatch({type: 'ACCOUNT_EMAIL_VERIFICATION_SEND_REQUEST'});
    return connection.sendEmailVerification()
        .then(x => {
            dispatch({type: 'ACCOUNT_EMAIL_VERIFICATION_SEND_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'ACCOUNT_EMAIL_VERIFICATION_SEND_FAILURE',payload: x});
            return Promise.reject(x);
        })
}

export const login = (username,password) => (dispatch, getState) => {
    dispatch({type: 'ACCOUNT_LOGIN_REQUEST'});
    return connection.login(username, password)
        .then(x => {
            dispatch({type: 'ACCOUNT_LOGIN_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'ACCOUNT_LOGIN_FAILURE',payload: x});
            return Promise.reject(x);
        })
}

export const logout = () => (dispatch, getState) => {
    dispatch({type: 'ACCOUNT_LOGOUT_REQUEST'});
    return connection.logout()
        .then(x => {
            dispatch({type: 'ACCOUNT_LOGOUT_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'ACCOUNT_LOGOUT_FAILURE',payload: x});
            return Promise.reject(x);
        })
}

export const updatePassword = (password,passwordNew) => (dispatch, getState) => {
    var email = !!getState().account.currentUser?getState().account.currentUser.email:null;

    return dispatch(reauthenticate(email, password))
        .then(() => {
            dispatch({type: 'ACCOUNT_UPDATE_PASSWORD_REQUEST'});
            return connection.updatePassword(passwordNew)
                .then(x => {
                    dispatch({type: 'ACCOUNT_UPDATE_PASSWORD_SUCCESS',payload: x});
                    return Promise.resolve(x);
                })
                .catch(x => {
                    dispatch({type: 'ACCOUNT_UPDATE_PASSWORD_FAILURE',payload: x});
                    return Promise.reject(x);
                })
        })
        .catch(x => {
            return Promise.reject(x);
        })
}

export const reauthenticate = (username,password) => (dispatch, getState) => {
    dispatch({type: 'ACCOUNT_REAUTHENTICATE_REQUEST'});
    return connection.reauthenticate(username, password)
        .then(x => {
            dispatch({type: 'ACCOUNT_REAUTHENTICATE_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'ACCOUNT_REAUTHENTICATE_FAILURE',payload: x});
            return Promise.reject(x);
        })
}


export const password = (passwordOld,passwordNew) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        let url = 'account/password';
        let data = {passwordOld: passwordOld, passwordNew: passwordNew};
        let reducer = 'ACCOUNT_PASSWORD';

        dispatch({type: reducer + '_REQUEST'});
        return post(url,data)
            .then(x => {
                dispatch({type: reducer + '_SUCCESS'});
                return resolve(x);
            })
            .catch(x => {
                dispatch({type: reducer + '_FAILURE'});
                return reject(x);
            })
    })
}
