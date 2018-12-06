import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyB3swGxChcXfcYMQge2faJQ1lDWp2GauTQ",
    authDomain: "app1-5229e.firebaseapp.com",
    databaseURL: "https://app1-5229e.firebaseio.com",
    projectId: "app1-5229e",
    storageBucket: "app1-5229e.appspot.com",
    messagingSenderId: "179500673490"
};

/* -------------------------------------------------- */
/* ---------- INIT ------------------------------- */

export const initialize = ()  => {
    return new Promise((resolve, reject) => {
        try {
            firebase.initializeApp(config);
            //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); // LOCAL, SESSION, NONE
            resolve();
        }
        catch (error) {
            console.error('initialize.catch - error:', error);
            reject(error);
        }
    });
}

/* -------------------------------------------------- */
/* ---------- AUTH ------------------------------- */

export const handleStateChanged = (callback)  => {
    firebase.auth().onAuthStateChanged(callback);
}

export const register = (email, password)  => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('register.catch - error:', error);
                reject(error);
            });
    });
}

export const login= (email, password)  => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('login.catch - error:', error);
                reject(error);
            })
    });
}

export const logout= ()  => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('logout.catch - error:', error);
                reject(error);
            });
    });
}

export const updateProfile= (displayName, photoURL)  => {
    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({displayName: displayName, photoURL: photoURL}) // photoURL: "https://example.com/jane-q-user/profile.jpg"
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('updateProfile.catch - error:', error);
                reject(error);
            })
    });
}

export const updateEmail= (email)  => {
    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        user.updateEmail(email)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('updateEmail.catch - error:', error);
                reject(error);
            })
    });
}

export const sendEmailVerification= ()  => {
    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification()
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('sendEmailVerification.catch - error:', error);
                reject(error);
            })
    });
}

export const updatePassword= (newPassword)  => {
    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('updatePassword.catch - error:', error);
                reject(error);
            })
    });
}

export const sendPasswordResetEmail= (email)  => {
    return new Promise((resolve, reject) => {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('sendPasswordResetEmail.catch - error:', error);
                reject(error);
            })
    });
}

export const deleteUser = ()  => {
    return new Promise((resolve, reject) => {
        var user = firebase.auth().currentUser;
        user.delete()
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('deleteUser.catch - error:', error);
                reject(error);
            })
    });
}

export const reauthenticate = (email,password)  => {
    return new Promise((resolve, reject) => {
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        var user = firebase.auth().currentUser;
        user.reauthenticateAndRetrieveDataWithCredential(credential)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('reauthenticate.catch - error:', error);
                reject(error);
            })
    });
}

/* -------------------------------------------------- */
/* ---------- REST ---------------------------------- */

export const getData = (key)  => {
    return new Promise((resolve, reject) => {
        firebase.database().ref(key)
            .once('value')
            .then(response => {
                resolve(response.val());
            })
            .catch(error => {
                console.error('getData.catch - error:', error);
                reject(error);
            })
    });
}


export function setData(key,value) {
    return new Promise((resolve, reject) => {
        firebase.database().ref(key)
            .set(value)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error('setData.catch - error:', error);
                reject(error);
            })
    });

}