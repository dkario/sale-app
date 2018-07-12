import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SaleItem from './SaleItem';

describe('SaleItem component', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<SaleItem basePrice="60" salePercentage="0.25" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders $45 sale price for a $60 item on a 25% sale', () => {
        const saleItem = shallow(<SaleItem basePrice="60" salePercentage="0.25" />);

        expect(saleItem.text()).toEqual('Buy this plant for only $60.00 $45.00!');
    });

    describe('calculateSalePrice', () => {
        it('should calculate and return the sale price by taking the `salePercetange` off of the `basePrice`', () => {
            const actual = SaleItem.prototype.calculateSalePrice(60, 0.25);
            const expected = 45;

            expect(actual).toEqual(expected);
        });
    });

    describe('formatPriceAsDollar', () => {
        it('should return the integer argument formatted as a dollar amount', () => {
            const actual = SaleItem.prototype.formatPriceAsDollar(60);
            const expected = '$60.00';

            expect(actual).toEqual(expected);
        });
    });
});
