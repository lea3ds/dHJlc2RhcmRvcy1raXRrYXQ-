import home from './home';
import homePrivate from './homePrivate';

const routesRoot = '';
export const routes = {
    homePrivate: {path: routesRoot + "/homePrivate", component: homePrivate },
    home: {path: routesRoot + "/home", component: home, isPublic: true},
    root: {path: routesRoot, component: home, isPublic: true},
}





