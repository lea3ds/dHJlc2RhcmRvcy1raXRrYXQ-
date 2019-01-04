import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Router from './router'
import {Dialog, Menu} from '../controllers';
import {routes,getRoutesForRouter,menuLinks} from "../../_config/routes"

class Component extends React.Component {

    render() {
        var {currentUser} = this.props.accountStore;

        var profileMock = {name: 'Leandro', lastName: 'Demo', email: 'leandroDemo@gmail.demo'};
        return (
            <section>

                <Menu
                    menuLinks={menuLinks}
                    isAuth={currentUser !== null}
                    profile={profileMock}
                    handleProfileClick={() => this.props.history.push(routes.account.profile.path)}
                    handleLoginClick={() => this.props.history.push(routes.account.login.path)}
                />

                <Dialog/>

                <Router
                    routes={getRoutesForRouter()}
                    history={this.props.history}
                    authPath={routes.account.root}
                    isAuthenticated={currentUser !== null}
                />

            </section>

        );

    }
}

const mapDispatchToProps = { };
const mapStateToProps = store => ({ accountStore: store.account });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
// el [withRouter] aca hace que renderice este componente cada vez que hay un cambio de URL