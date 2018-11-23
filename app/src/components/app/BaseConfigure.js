import React from 'react';
import { connect } from "react-redux";
import {initialize} from "./_actions";

class Component extends React.Component {

    state = {isReady: false}

    componentDidMount() {
        if (!this.props.app.initialized && !this.props.app.initializing) {
            this.props.initialize()
                .catch(error => {
                    console.log('initializeApp.catch - error:', error);
                    console.log('REFRESH F5');
                });
        }
    }

    render() {
        if (this.props.app.initializing === true) return <h3>initializing</h3>;
        if (this.props.app.initialized === true) return this.props.children;
        return <h3>wait</h3>;
    }
}

const mapDispatchToProps = {initialize };
const mapStateToProps = store => ({ app:store.app  });
export default connect(mapStateToProps, mapDispatchToProps)(Component);
