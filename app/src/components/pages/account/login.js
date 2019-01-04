import React from 'react';
import { connect } from "react-redux";
import {login,logout} from "./_actions";
import {strings,getString, routes} from './index';
import { Form, Toolbar, Loader } from '../../controllers/index';

class Component extends React.Component {
    state = {
        username: '',
        password:'',
        usernameError: null,
        passwordError: null,
        confirming:false
    };

    componentDidMount() {
        this.props.logout();
    }

    confirmHandle=()=> {
        this.setState({confirming: true});
        this.props.login(this.state.username, this.state.password)
            .then(() => {
                this.setState({confirming: false});
                this.props.history.replace(routes.rootApp.path);
            })
            .catch(() => {
                window.showDialog({title: strings.account_login_failure_title, message: strings.account_login_failure_message});
                this.setState({confirming: false});
            })
    }

    goRecover=()=> {
        this.props.history.push(routes.recovery.path);
    }

    goSignin=()=> {
        this.props.history.push(routes.signin.path);
    }

    render() {
        console.log(this.props);
        return <div>

            <Toolbar title={strings.account_login_title} menuButton/>

            {this.state.confirming ? <Loader/> : null}

            <p>leandro2712@gmail.com<br />123456</p>

            <div>

                <Form type='email' label={strings.account_login_username}
                      value={this.state.username}
                      onChange={e => this.setState({username: e.target.value,usernameError:e.target.error})}
                      helperText = {!this.state.usernameError?null:getString('account_login_usernameError_'+this.state.usernameError)}
                />

                <Form type='password' label={strings.account_login_password}
                      value={this.state.password}
                      onChange={e => this.setState({password: e.target.value,passwordError:e.target.error})}
                      helperText = {!this.state.passwordError?null:getString('account _login_passwordError_'+this.state.passwordError)}
                />

                <Form type='button' label={strings.account_login_confirm} variant="contained" color="primary"
                      disabled={!this.state.username || !this.state.password || !!this.state.usernameError || !!this.state.passwordError }
                      onClick={this.confirmHandle}
                />

                <Form type='button' label={strings.account_login_goToRecover}
                      onClick={this.goRecover}
                />

                <Form type='button' label={strings.account_login_goToSignin} variant="outlined" color="primary"
                      onClick={this.goSignin}
                />

            </div>

        </div>;


//             {/*<div style={{ marginTop: 5 }} >*/}
//                 {/*<FacebookLogin client='FACEBOOK' loadClient={this.loadClient} login={this.login} initialized={this.clientInitialized} />*/}
//             {/*</div>*/}
//             {/*<div style={{ marginTop: 5 }} >*/}
//                 {/*<GoogleLogin client='GOOGLE' loadClient={this.loadClient} login={this.login} initialized={this.clientInitialized} />*/}
//             {/*</div>*/}
    }
}

const mapDispatchToProps = {login,logout};
const mapStateToProps = store => ({ account: store.account });
export default connect(mapStateToProps, mapDispatchToProps)(Component);


