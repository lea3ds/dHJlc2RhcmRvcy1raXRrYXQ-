import {strings} from "../../localization/strings";

const initialState = {
    initialized:false,
    initializeWorking:false,

    strings:strings,
    stringsGetWorking:false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'APP_INITIALIZE_REQUEST' :
            return {...state, initializeWorking: true, initialized: false,};
        case 'APP_INITIALIZE_SUCCESS' :
            return {...state, initializeWorking: false, initialized: true,};
        case 'APP_INITIALIZE_FAILURE' :
            return {...state, initializeWorking: false, initialized: false,};


        case 'APP_STRINGS_GET_REQUEST' :
            return {...state, stringsGetWorking: true};
        case 'APP_STRINGS_GET_SUCCESS' :
            return {...state, stringsGetWorking: false, strings: action.payload};
        case 'APP_STRINGS_GET_FAILURE' :
            return {...state, stringsGetWorking: false};


        default:
            return state;
    }

}

export default reducer;
