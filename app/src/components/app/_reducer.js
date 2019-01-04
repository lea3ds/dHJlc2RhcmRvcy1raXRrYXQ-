const initialState = {
    initialized:false,
    initializeWorking:false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'APP_INITIALIZE_REQUEST' :
            return {...state, initializeWorking: true, initialized: false,};
        case 'APP_INITIALIZE_SUCCESS' :
            return {...state, initializeWorking: false, initialized: true,};
        case 'APP_INITIALIZE_FAILURE' :
            return {...state, initializeWorking: false, initialized: false,};

        default:
            return state;
    }

}

export default reducer;
