import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';

const dataUrl =
  'https://raw.githubusercontent.com/buscape-company/exercicios/master/frontend/resources/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: [],
      products: [],
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    axios
      .get(dataUrl)
      .then(response => response.data.items)
      .then(items => items.map(i => i.product))
      .then(products => this.setState({ products }));
  }
  render() {
    return (
      <div className="App">
        <Header
          cart={this.state.cart}
          showCart={this.state.showCart}
          openCart={() => this.setState({ showCart: !this.state.showCart })}
        />
        {JSON.stringify(this.state.products)}
      </div>
    );
  }
}

export default App;
