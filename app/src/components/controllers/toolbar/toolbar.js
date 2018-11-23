import React from 'react';
import {connect} from "react-redux";
import {openDrawer} from "../../../actions/appWraper";
import {AppBar, Toolbar} from '@material-ui/core';

import Title from './title';
import MenuButton from './menuButton';
import BackButton from './backButton';
import AccountButton from './accountButton';
import ExitButton from './exitButton';


class Component extends React.Component {

    render() {
        const {title, menuButton, backButton, exitButton, accountButton} = this.props;

        return <AppBar position="static" className={"toolbar"}>
            <Toolbar>
                {menuButton === undefined ? null : <MenuButton/>}
                {backButton === undefined ? null : <BackButton clickHandle={backButton}/>}
                <Title title={title}/>
                {exitButton === undefined ? null : <ExitButton/>}
                {accountButton === undefined ? null : <AccountButton/>}
            </Toolbar>
        </AppBar>;
    }
}


const mapDispatchToProps = { openDrawer };
const mapStateToProps = store => ({ appWraper: store.appWraper });
export default connect(mapStateToProps, mapDispatchToProps)(Component);