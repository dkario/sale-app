import React, { Component } from 'react';
import './SaleItem.css';

class SaleItem extends Component {
    // Step 0: Take a look at the successfully compiled app in your browser,
    // and then at the logic used inside `render()` below.
    // Once you get the gist of it, follow the instructions in `render()`.

    // Step 1: implement this business logic.
    calculateSalePrice(basePrice, salePercentage) {
        // TODO
    }

    // Step 2: implement this view logic.
    formatPriceAsDollar(price) {
        // TODO
    }

    // Step 3: Implement this by calling helper method(s) above with `this.props`.
    getBasePrice() {
        // TODO
    }

    // Step 4: Implement this by calling helper method(s) above with `this.props`.
    getSalePrice() {
        // TODO
    }

    render() {
        return (
          <section className="sale-item">
            <img src="plant.jpg" alt="plant" className="image" />
            <p>
                Buy this plant for only
                { ' ' }
                <span className="base-price">
                    {/* { this.getBasePrice() } */}
                    {/* Uncomment above and extract below into refactored class methods */}
                    { '$' + parseFloat(Math.round(this.props.basePrice * 100) / 100).toFixed(2) }
                </span>
                { ' ' }
                <span className="sale-price">
                    {/* { this.getSalePrice() } */}
                    {/* Uncomment above and extract below into refactored class methods */}
                    { '$' + parseFloat(Math.round(this.props.basePrice * (1 - this.props.salePercentage) * 100) / 100).toFixed(2) }
                </span>
                !
            </p>
            </section>
        );
    }
}

export default SaleItem;
