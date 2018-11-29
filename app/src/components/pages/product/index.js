import reducer from './_reducer';
import {strings} from "../../../localization/strings";

import products from './products';
import product from "./product";

const routesRoot = '/product';

const routes = {
    product: {path: routesRoot + "/this", component: product, exact:false},
    list: {path: routesRoot + "/list", component: products},
    root: {path: routesRoot, component: products, isPublic: true},
    rootApp: {path: ''},
}

export { reducer, routes, routesRoot, strings };



