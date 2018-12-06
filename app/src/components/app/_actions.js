import * as connection from '../../_helpers/connection';

// ++ STEPS CONTROLLER

export const initialize = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        try {
            var currentStep = -1;
            var nextStep = 0;

            var steps = [
                stepBegin(),
                firebaseInitialize(),
                firebaseSetAuthStateChangedHandler(),
                awaitAuth(),
                //setStrings("es",getState().app.strings),
                getStrings("es"),
                stepEnd(),
            ];

            var stepRunner = setInterval(() => {

                if (nextStep>=steps.length) {
                    clearInterval(stepRunner);
                    return resolve();
                }

                if (currentStep !== nextStep) {
                    currentStep = nextStep;
                    dispatch(steps[nextStep])
                        .then(() => {
                            nextStep++;
                        })
                        .catch(e => {
                            clearInterval(stepRunner);
                            dispatch(stepError(e));
                            return reject(e);
                        })
                }
            }, 100);
        }
        catch (error) {
            clearInterval(stepRunner);
            return reject(error);
        }
    });
}

const stepError=(error) => (dispatch, getState) => {
    dispatch({type: 'APP_INITIALIZE_FAILURE'});
    return Promise.resolve();
}

const stepBegin = () => (dispatch, getState) => {
    dispatch({type: 'APP_INITIALIZE_REQUEST'});
    return Promise.resolve();
}

const stepEnd = () => (dispatch, getState) => {
    dispatch({type: 'APP_INITIALIZE_SUCCESS'});
    return Promise.resolve();
}

// -- STEPS CONTROLLER

// ++ FIREBASE INITIALIZE & AUTH

const firebaseInitialize = () => (dispatch, getState) => {
    return connection.initialize()
        .then(x => Promise.resolve(x))
        .catch(x => Promise.reject(x))
}

var isFirebaseInitialized = false;
const firebaseSetAuthStateChangedHandler = () => (dispatch, getState) => {
    try {
        connection.handleStateChanged(user => {
            isFirebaseInitialized=true;
            if (user) {
                dispatch({type: 'ACCOUNT_CURRENT_USER_CHANGED', payload: user});
            } else {
                dispatch({type: 'ACCOUNT_CURRENT_USER_CHANGED', payload: null});
            }
        })
        return Promise.resolve();
    }
    catch (error) {
        return Promise.reject(error);
    }
}

const awaitAuth = () => (dispatch, getState) => {
    return Promise.resolve();
    return new Promise((resolve, reject) => {
        var attemp = 0;
        var attempMax = 5 * 10;

        var awaitInterval = setInterval(() => {
            attemp++;
            if (isFirebaseInitialized) {
                clearInterval(awaitInterval);
                resolve();
            }
            if (attemp >= attempMax) {
                clearInterval(awaitInterval);
                reject();
            }
        }, 100);
    });
}

// -- FIREBASE INITIALIZE & AUTH


// ++ STRINGS

export const setStrings = (language,strings) => (dispatch, getState) => {
    var key = "strings/"+language;
    var data = strings;
    dispatch({type: 'APP_STRINGS_SET_REQUEST'});
    return connection.setData(key,data)
        .then(x => {
            dispatch({type: 'APP_STRINGS_SET_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'APP_STRINGS_SET_FAILURE',payload: x});
            return Promise.reject(x);
        })
}

export const getStrings = (language) => (dispatch, getState) => {
    var key = !language?"strings":"strings/"+language;
    dispatch({type: 'APP_STRINGS_GET_REQUEST'});
    return connection.getData(key)
        .then(x => {
            dispatch({type: 'APP_STRINGS_GET_SUCCESS',payload: x});
            return Promise.resolve(x);
        })
        .catch(x => {
            dispatch({type: 'APP_STRINGS_GET_FAILURE',payload: x});
            return Promise.resolve(x);
        })
}

// -- STRINGS