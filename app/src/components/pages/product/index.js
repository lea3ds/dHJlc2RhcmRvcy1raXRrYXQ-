// Global
import reducer from './_reducer';
import {strings} from "../../../app-config/localization/strings";

// Component
import products from './products';
import product from "./product";

// Routes
const routesRoot = '/product';
const routes = {
    product: {path: routesRoot + "/this", component: product, exact:false},
    list: {path: routesRoot + "/list", component: products},
    root: {path: routesRoot, component: products, isPublic: true},
    rootApp: {path: ''},
}

// Export
export { reducer, routes, routesRoot, strings };



