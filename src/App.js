import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          cart={this.state.cart}
          showCart={this.state.showCart}
          openCart={() => this.setState({ showCart: !this.state.showCart })}
        />
      </div>
    );
  }
}

export default App;
