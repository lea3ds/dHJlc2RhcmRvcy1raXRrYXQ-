import './_styles.css';
import React from 'react';
import {connect} from "react-redux";
import {getProducts} from "./_actions";
import {routes} from "./index";
import {Toolbar} from '../../controllers/index';

import FilterableProductList from "./comps/filterableProductList";

class Component extends React.Component {

    handleSelected = (product) => {
        var pathname = routes.product.path +'/'+ product.id +'/'+ product.title.replace(/\s/g, "-");
        this.props.history.push(pathname);
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        var products = this.props.product.products;

        return <section className={"page"}>
            <Toolbar title={"Products"} menuButton/>
            <div className={"content-wrapper"}>
                <div className={"overflow-container"}>
                    {/* -------------------- Content --------------------*/}

                    {products.length > 0
                        ? <FilterableProductList
                            products={products}
                            handleSelected={this.handleSelected}
                        />
                        : <div>No hay productos</div>
                    }

                    {/* -------------------- Content --------------------*/}
                </div>
            </div>
        </section>;
    }
}

const mapDispatchToProps = {getProducts};
const mapStateToProps = store => ({ product: store.product });
export default connect(mapStateToProps, mapDispatchToProps)(Component);
