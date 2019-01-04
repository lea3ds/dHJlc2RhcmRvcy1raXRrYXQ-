import React from 'react';
import { Link } from 'react-router-dom';
import {Drawer,Divider,List,ListItem,ListItemText} from '@material-ui/core';
import Head from './head';

const UnItem = (props)=> {
    var {item, isAuth} = props;

    if (item.name === '-')
        return <Divider/>;

    if (!!!item.path && (item.isPublic === true || isAuth === true))
        return <ListItem button>
            <ListItemText primary={item.name}/>
        </ListItem>;

    if (item.isPublic === true || isAuth === true)
        return <Link to={{pathname: item.path}} style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemText primary={item.name}/>
            </ListItem>
        </Link>;

    return null;
}

class Component extends React.Component {
    state = {
        opened: false,
    };

    componentDidMount() {
        window.showMenu = () => {
            this.setState({opened: true,})
        };
    }

    handleClose = () => {
        this.setState({opened: false});
    };


    render() {

        var {menuLinks, isAuth, handleProfileClick, handleLoginClick, profile} = this.props;
        var links = menuLinks.slice();

        return <Drawer open={this.state.opened} onClose={this.handleClose}>

            <Head
                isAuth={isAuth}
                profile={profile}
                handleProfileClick={() => {this.handleClose();handleProfileClick();}}
                handleLoginClick={() => {this.handleClose();handleLoginClick();}}
            />

            <List component="nav" onClick={this.handleClose} onKeyDown={this.handleClose}>
                {links.map((item, index) =><UnItem item={item} key={index} isAuth={isAuth} />)}
            </List>

        </Drawer>;
    }
}

export default Component;
