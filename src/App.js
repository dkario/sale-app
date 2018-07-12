import React, { Component } from 'react';
import SaleItem from './SaleItem';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Huge sale</h1>
                </header>

                <SaleItem basePrice="60" salePercentage="0.25"></SaleItem>
            </div>
        );
    }
}

export default App;
