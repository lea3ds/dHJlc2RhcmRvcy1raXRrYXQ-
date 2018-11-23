//import {authorization_valid} from '../../../actions/connection';

const initialState = {
    //isAuthenticated: authorization_valid(),
    currentUser:null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ACCOUNT_CURRENT_USER_CHANGED' :
            return {...state,currentUser: action.payload};

        /*
        case 'ACCOUNT_LOGIN_REQUEST' : return {...state};
        case 'ACCOUNT_LOGIN_SUCCESS' : return {...state};
        case 'ACCOUNT_LOGIN_FAILURE' : return {...state};

        case 'ACCOUNT_REGISTER_REQUEST' : return {...state};
        case 'ACCOUNT_REGISTER_SUCCESS' : return {...state};
        case 'ACCOUNT_REGISTER_FAILURE' : return {...state};

        case 'ACCOUNT_LOGOUT_REQUEST' : return {...state};
        case 'ACCOUNT_LOGOUT_SUCCESS' : return {...state};
        case 'ACCOUNT_LOGOUT_FAILURE' : return {...state};

        case 'ACCOUNT_UPDATE_PASSWORD_REQUEST' : return {...state};
        case 'ACCOUNT_UPDATE_PASSWORD_SUCCESS' : return {...state};
        case 'ACCOUNT_UPDATE_PASSWORD_FAILURE' : return {...state};

        case 'ACCOUNT_REAUTHENTICATE_REQUEST' : return {...state};
        case 'ACCOUNT_REAUTHENTICATE_SUCCESS' : return {...state};
        case 'ACCOUNT_REAUTHENTICATE_FAILURE' : return {...state};

        ACCOUNT_EMAIL_VERIFICATION_SEND_REQUEST
        */



        default:
            return state;
    }

}

export default reducer;
