import React from 'react';
import { connect } from "react-redux";
import {sendEmailVerification} from "./_actions";
import {routes, strings} from './index';
import { Toolbar,Loader } from '../../controllers/index';

class Component extends React.Component {
    state = {confirming: true, sent:false, };

    componentDidMount() {
        this.props.sendEmailVerification()
            .then(() => {
                this.setState({confirming: false, sent:true});
            })
            .catch(() => {
                window.showDialog({title: 'Error', message: 'Falló !'});
                this.setState({confirming: false,});
            })
    }

    render() {
        return <div>
            <Toolbar title={'Sending'}/>
            {this.state.confirming ? <Loader/> : null}
            {this.state.sent? <h4>Sent</h4>:null}
            {!this.state.sent && !this.state.confirming? <h4>Error</h4>:null}
        </div>;
    }
}

const mapDispatchToProps = {sendEmailVerification};
const mapStateToProps = store => ({ });
export default connect(mapStateToProps, mapDispatchToProps)(Component);
