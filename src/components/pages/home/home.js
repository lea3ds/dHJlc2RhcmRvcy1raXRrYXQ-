import React from 'react';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";
import {strings,setLanguage} from "../../../app-config/strings"
class Component extends React.Component {

    render() {
        setLanguage("eng")
        console.log(strings.account_login_username({username:"Leandro", password:"Ninguna", 5:5}));

        return <section className={"page"}>
            <Toolbar title={'Home'} menuButton/>

            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}
                    <h5>{!!this.props.accountStore.currentUser ? this.props.accountStore.currentUser.email : 'no user'}</h5>
                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({ accountStore:store.account, appStore:store.app });
export default connect(mapStateToProps, mapDispatchToProps)(Component);


