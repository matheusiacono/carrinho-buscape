import React, { Component } from 'react';
import { Persist } from 'react-persist';
import axios from 'axios';

import Header from './components/Header';
import ProductList from './components/ProductList';

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
  addToCart(item) {
    this.setState({ cart: [...this.state.cart, item] });
  }
  removeFromCart(index) {
    const cart = [...this.state.cart.slice(0, index), ...this.state.cart.slice(index + 1)];
    this.setState({
      cart,
      ...(cart.length < 1 ? { showCart: false } : null),
    });
  }
  render() {
    return (
      <div className="app">
        <Header
          cart={this.state.cart}
          showCart={this.state.showCart}
          openCart={() => {
            if (this.state.cart.length > 0) {
              this.setState({ showCart: !this.state.showCart });
            }
          }}
          removeFromCart={i => this.removeFromCart(i)}
        />
        <ProductList products={this.state.products} addToCart={i => this.addToCart(i)} />
        <Persist
          name="cart-state"
          data={this.state}
          debounce={500}
          onMount={data => this.setState(data)}
        />
      </div>
    );
  }
}

export default App;
