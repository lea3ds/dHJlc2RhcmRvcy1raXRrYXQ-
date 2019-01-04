import React from 'react';
import {Button,Card,CardActions,CardActionArea,CardMedia,CardContent,Typography} from "@material-ui/core";

const CardComponent = (props) => {
    return <Card className={"card"}>
        <CardActionArea onClick={()=>props.handleSelected({id:props.id,title:props.title})}>
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

const Component = (props) => {
    var style = {display: props.hidden === true ? "none" : null};

    if (props.type === "card") {
        return <div className={"productList-container"} style={style}>
            {props.products.map(product =>
                <CardComponent
                    {...product}
                    key={product.id}
                    handleSelected={e =>
                        setTimeout(() => props.handleSelected(e), 200)
                        /*retraso para que no de error el componentWillUnmount del componente que lo llama*/
                    }
                />
            )}
        </div>
    }

    return <ul style={style}>
        {props.products.map(product =>
            <li key={product.id}>{product.title}</li>
        )}
    </ul>;
}

export default Component;