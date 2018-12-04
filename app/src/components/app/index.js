import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Router from './router'
import {Dialog, Menu} from '../controllers';

import { routes as routesProduct } from '../pages/product/index';
import { routes as routesAccount } from '../pages/account';
import { routes as routesHome } from '../pages/home';
import { routes as routesMap } from '../pages/map-google';
import { routes as routesNotFound } from '../pages/not-found';

const menuLinks = [
    {name:'Home', ...routesHome.home },
    {name:'HomePrivate', ...routesHome.homePrivate },
    {name:'Product', ...routesProduct.root },
    {name:'Map', ...routesMap.root },
    {name: '-'},
];

class Component extends React.Component {

    allRoutes = [].concat(
        Object.values(routesProduct),
        Object.values(routesAccount),
        Object.values(routesHome),
        Object.values(routesMap),
        Object.values(routesNotFound), // siempre ultimo!!!
    ).filter(x => !!x.component);

    render() {
        var profileMock = {name:'Leandro',lastName:'Demo',email:'leandroDemo@gmail.demo'};
        return (
            <section>

                <Menu
                    menuLinks={menuLinks}
                    isAuth={this.props.account.currentUser !== null}
                    profile = {profileMock}
                    handleProfileClick = {()=>this.props.history.push(routesAccount.profile.path)}
                    handleLoginClick = {()=>this.props.history.push(routesAccount.login.path)}
                />

                <Dialog/>

                <Router
                    routes={this.allRoutes}
                    history={this.props.history}
                    authPath={routesAccount.root}
                    isAuthenticated={this.props.account.currentUser !== null}
                />


            </section>

        );

    }
}

const mapDispatchToProps = { };
const mapStateToProps = store => ({ appWraper: store.appWraper, account: store.account });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
// el [withRouter] aca hace que renderice este componente cada vez que hay un cambio de URL