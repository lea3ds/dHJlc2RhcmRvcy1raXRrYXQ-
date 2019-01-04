import './_style.css';

// Global
import {strings} from "../../../app-config/localization/strings";

// Component
import map from './map';

// Routes
const routesRoot = '/map';
const routes = {
    home: {path: routesRoot + "/map", component: map},
    root: {path: routesRoot, component: map},
    rootApp: {path: ''},
}

// Export
export {routes, routesRoot, strings };


