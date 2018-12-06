import React from 'react';
import { connect } from "react-redux";
import {initialize} from "./_actions";

class Component extends React.Component {

    state = {isReady: false}

    componentDidMount() {
        if (!this.props.app.initialized && !this.props.app.initializeWorking) {
            this.props.initialize()
                .catch(error => {
                    console.log('initializeApp.catch - error:', error);
                    console.log('REFRESH F5');
                });
        }
    }

    render() {
        if (this.props.app.initializeWorking === true) return <div>initializeWorking</div>;
        if (this.props.app.initialized === true) return this.props.children;

        return <div>wait</div>;
    }
}

const mapDispatchToProps = {initialize };
const mapStateToProps = store => ({ app:store.app  });
export default connect(mapStateToProps, mapDispatchToProps)(Component);
