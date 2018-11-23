import React from 'react';
import {Button,Card,CardActions,CardActionArea,CardMedia,CardContent,Typography} from "@material-ui/core";

const Component = (props) => {
    return <Card className={"card"}>
        <CardActionArea>
            <CardMedia
                image={props.media}
                title={props.title}
                component={"img"}
            />
            <CardContent>
                <Typography variant="h5">
                    {props.title}
                </Typography>
                <Typography>
                    {props.descrip}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>;
}

export default Component;