import React from 'react';
import FilterInput from "./filterInput";
import ProductList from "./productList";

class Component extends React.Component {

    state = {
        filter: "",
        suggestions:this.props.products.map(x => x.title),
        productListHidden: false,
    };

    render() {
        var productsFiltered = this.state.filter.length
            ? this.props.products.filter(x => x.title.indexOf(this.state.filter) >= 0)
            : this.props.products;

        return <div>

            <FilterInput
                value={this.state.filter}
                suggestions={this.state.suggestions}
                handleValueSelected={e => this.setState({filter: e})}
                handleOpenChange={e => this.setState({productListHidden: e})}
            />

            <ProductList
                products={productsFiltered}
                hidden={this.state.productListHidden}
                type={"card"}
                handleSelected={this.props.handleSelected}
            />

        </div>;
    }
}

export default Component;

