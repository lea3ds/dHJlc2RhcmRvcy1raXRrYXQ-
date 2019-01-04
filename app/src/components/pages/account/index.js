import reducer from './_reducer';
import {strings} from "../../../app-config/localization/strings";
import login from './login';
import signin from './signin';
import logout from './logout';
import password from './password';
import recovery from './recovery';
import validRecovery from './validRecovery';
import sendEmailVerification from './sendEmailVerification';
import profile from './profile';

const routesRoot = '/account';

const routes = {
    login: {path: routesRoot + "/login", component: login, isPublic: true},
    signin: {path: routesRoot + "/signin", component: signin, isPublic: true},
    recovery: {path: routesRoot + "/recovery", component: recovery, isPublic: true},

    logout: {path: routesRoot + "/logout", component: logout, isPublic: false},
    password: {path: routesRoot + "/password", component: password, isPublic: false},
    sendEmailVerification: {path: routesRoot + "/sendEmailVerification", component: sendEmailVerification, isPublic: false},


    validRecovery: {path: routesRoot + "/validRecovery", component: validRecovery, isPublic: true},

    profile: {path: routesRoot + "/profile", component: profile, isPublic: false},

    root: {path: routesRoot, component: login, isPublic: true},
    rootApp: {path: ''},
}


export { reducer, routes, routesRoot, strings };

