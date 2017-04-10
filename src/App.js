import React, { Component } from 'react';
import Storage from './Storage';
import './App.css';

const PRODUCTS = [
  { id: 1, name: 'Product 1', price: 3.99 },
  { id: 2, name: 'Product 2', price: 4.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
  { id: 4, name: 'Product 4', price: 39.99 },
  { id: 5, name: 'Product 5', price: 99.99 }
];

class App extends Component {

  constructor() {
    super();

    this.state = { cart: Storage.get('CART') || [] };
  }

  handleAdd = (product) => {
    const cart = Storage.get('CART');

    if (cart !== null) {
      if (cart.some(c => c.id === product.id)) {
        const item = cart.filter(p => p.id === product.id)
          .map(p => ({
            ...p,
            quantity: p.quantity + 1
          }))
          .reduce((prev, current) => current);

        Storage.set('CART', [...cart.filter(p => p.id !== product.id), item])
      } else {
        Storage.set('CART', [...cart, { ...product, quantity: 1 }]);
      }
    } else {
      Storage.set('CART', [{ ...product, quantity: 1 }]);
    }

    this.setState({ cart: Storage.get('CART') });
  };

  handleRemove = product => {
    const cart = Storage.get('CART');
    if(cart !== null) {
      Storage.set('CART', [...cart.filter(p => p.id !== product.id)]);
    }

    this.setState({ cart: Storage.get('CART') });
  };

  renderProduct(product) {
    return (
      <div key={product.id}>
        {product.name}
        <button onClick={e => this.handleAdd(product)}>Add to Cart</button>
        { }
        <button onClick={e => this.handleRemove(product)}>Remove</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Storage name="CART" value={[]} />
        { PRODUCTS.map(product => this.renderProduct(product))}

        <button onClick={e => Storage.clear()}>Clear</button>
        <div>{JSON.stringify(Storage.get('CART'))}</div>
      </div>
    );
  }
}

export default App;
