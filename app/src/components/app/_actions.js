import * as connection from '../../_helpers/firebase';

export const initialize = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        try {
            var currentStep = -1;
            var nextStep = 0;

            var steps = [
                stepBegin(),
                stepFirebaseInit(),
                stepFirebaseSetAuthStateChangedHandler(),
                stepAwaitAuth(),
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



/*++ STEPS ++*/

var isFirebaseInitialized = false;

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

const stepFirebaseInit = () => (dispatch, getState) => {
    return connection.initialize()
        .then(x => Promise.resolve(x))
        .catch(x => Promise.reject(x))
}

const stepFirebaseSetAuthStateChangedHandler = () => (dispatch, getState) => {
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

const stepAwaitAuth = () => (dispatch, getState) => {
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
/*-- STEPS --*/