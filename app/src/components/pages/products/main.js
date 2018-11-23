import React from 'react';
import {Toolbar} from '../../controllers';
import {connect} from "react-redux";
import './styles.css';
import Card from "./card";
import SearchInput from "./searchInput";

import image from "../../../assets/lagartija.png"

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

                    <div className={"search-container"}>
                        <SearchInput/>
                    </div>

                    <div className={"card-container"}>
                        {products.map(x=><Card {...x} key={x.id} />)}
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

