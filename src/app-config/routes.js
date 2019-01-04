import {routes as routesAccount} from "../components/pages/account";
import {routes as routesMap} from "../components/pages/map-google";
import {routes as routesNotFound} from "../components/pages/not-found";
import {routes as routesHome} from "../components/pages/home";
import {routes as routesProduct} from "../components/pages/product";


export const routes = {
    account: routesAccount,
    map: routesMap,
    home: routesHome,
    product:routesProduct,
    notFound: routesNotFound,
};


export const menuLinks = [
    {name:'Home', ...routesHome.home },
    {name:'HomePrivate', ...routesHome.homePrivate },
    {name:'Product', ...routesProduct.root },
    {name:'Map', ...routesMap.root },
    {name: '-'},
];


export const getRoutesForRouter = () => {
    var sortDesc=(a, b)=>{
        if (a.path > b.path) return -1;
        if (a.path < b.path) return 1;
        return 0;
    }
    var response = Object.values(routes);
    Object.values(routes).map(x => {response.push(...Object.values(x))});
    response=response.map(x => !x.path?{...x,path:"/"}:x);
    response=response.filter(x => !!x.component);
    response=response.sort(sortDesc);
    return response;
}