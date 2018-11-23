
const initialState = {
    initialized:false,
    initializing:false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'APP_INITIALIZE_REQUEST' :
            return {...state, initialized:false, initializing:true};
        case 'APP_INITIALIZE_SUCCESS' :
            return {...state, initialized:true, initializing:false};
        case 'APP_INITIALIZE_FAILURE' :
            return {...state, initialized:false, initializing:false};

        default:
            return state;
    }

}

export default reducer;
