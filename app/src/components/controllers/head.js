import React from 'react';
import UserIcon from "@material-ui/icons/AccountCircle"
import {Button} from '@material-ui/core';
import {strings} from "../../app-config/localization/strings";

export const Head = ({isAuth,profile,handleProfileClick,handleLoginClick}) => {

    return <section className={"menu-profile"}>
        {!isAuth
            ?
            <Button fullWidth={true} onClick={handleLoginClick}>
                <div className={"unlogged"}>
                    {strings.menu_login}
                </div>
            </Button>
            :
            <Button fullWidth={true} onClick={handleProfileClick}>
                <div className={"logged"}>
                    <div className={"icon"}><UserIcon style={{width:"100%", height:"100%"}} /></div>
                    <div className={"name"}>{profile.email}</div>
                </div>
            </Button>
        }
    </section>;
};

export default (Head);

