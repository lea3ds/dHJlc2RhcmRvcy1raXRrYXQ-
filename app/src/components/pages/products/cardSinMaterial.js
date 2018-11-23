import React from 'react';
import {Button} from "@material-ui/core";

const Component=(props)=> {
    return <div className={"card"} key={props.id}>
        <div className={"media"}>
            <img src={props.media} alt="¿?"/>
        </div>
        <div className={"title"}>
            {props.title}
        </div>
        <div className={"content"}>
            {props.descrip}
        </div>
        <div className={"action"}>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </div>
    </div>;
}

export default Component;