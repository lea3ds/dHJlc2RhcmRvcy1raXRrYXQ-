import React from 'react';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";
import './styles.css';
import image from "../../../assets/lagartija.png"

import {Button,Card,CardActions,CardActionArea,CardMedia,CardContent,Typography} from "@material-ui/core";

const Component3=(props)=> {
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

const Component2 = (props)=> {
    return <Card>
        <CardActionArea>
            <CardMedia
                image={props.media}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography component="p">
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

class Component extends React.Component {
    render() {
        var products = [
            {id: 1, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
            {id: 2, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
            {id: 3, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
            {id: 4, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
            {id: 5, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
        ]

        return <section className={"page"}>
            <Toolbar title={'Private'} menuButton/>

            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}

                    <div className={"card-container"}>
                        {products.map(x=><Component2 {...x} />)}
                        {products.map(x=><Component3 {...x} />)}
                    </div>

                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({ });
export default connect(mapStateToProps, mapDispatchToProps)(Component);

