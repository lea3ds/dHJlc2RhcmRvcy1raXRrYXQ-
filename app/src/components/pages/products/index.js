import reducer from './_reducer';
import {strings} from "../../../localization/strings";

import main from './main';

const routesRoot = '/products';

const routes = {
    root: {path: routesRoot, component: main, isPublic: true},
    rootApp: {path: ''},
}

export { reducer, routes, routesRoot, strings };



