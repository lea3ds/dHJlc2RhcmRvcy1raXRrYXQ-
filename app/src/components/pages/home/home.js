import React from 'react';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";
import * as connection from '../../../_helpers/firebase';

class Component extends React.Component {

    render() {
        return <section className={"page"}>
            <Toolbar title={'Home'} menuButton/>

            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}
                    <h5>{!!this.props.account.currentUser ? this.props.account.currentUser.email : 'no user'}</h5>
                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({ account: store.account });
export default connect(mapStateToProps, mapDispatchToProps)(Component);


