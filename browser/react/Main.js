import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import UsersList from './UsersList';
import ProductsList from './ProductsList';

class Main extends Component {
  constructor() {
    super();
    this.state = { users: [], products: [], activeTab: { id: 1, name: 'Users', isActive: true }};
    this.tabs = [ { id: 1, name: 'Users', isActive: true }, { id: 2, name: 'Products', isActive: false }];

    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleAddNewProduct = this.handleAddNewProduct.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(({ data }) => this.setState({ users: data }))
      .then(() => axios.get('/api/products'))
      .then(({ data }) => this.setState({ products: data }));
  }

  handleAddNewProduct(product) {
    axios.post(`/api/products`, { product })
      .then(({ data }) => {
        const { products } = this.state;
        products.push(data);
        this.setState({ products });
      });
  }

  handleRemoveProduct(product) {
    axios.delete(`/api/products/${product.id}`)
      .then(() => {
        let { products } = this.state;
        products = products.filter(stateProduct => stateProduct.id !== product.id);
        this.setState({ products });
      });
  }

  handleTabChange(tab) {
    this.tabs = this.tabs.map(thisTab => {
      if (thisTab.id === tab.id) {
        thisTab.isActive = true;
      } else {
        thisTab.isActive = false;
      }
      return thisTab;
    });
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div className="container">
        <NavBar tabs={this.tabs} handleTabChange={this.handleTabChange} numUsers={this.state.users.length} numProducts={this.state.products.length} />
        <h1>Acme-Users-Products-React</h1>
        {this.state.activeTab.name === 'Users' ? <UsersList users={this.state.users} /> : ''}

        {this.state.activeTab.name === 'Products' ? (
          <ProductsList
            handleAddNewProduct={this.handleAddNewProduct}
            products={this.state.products}
            handleRemoveProduct={this.handleRemoveProduct}
          />) :
        ''}
      </div>
    );
  }
}

export default Main;
