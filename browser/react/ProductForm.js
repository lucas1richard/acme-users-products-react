import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newProduct: '' };
    this.setNewProduct = this.setNewProduct.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
  }

  setNewProduct(ev) {
    this.setState({ newProduct: ev.target.value });
  }

  addNewProduct() {
    if (!this.state.newProduct.length) return;
    this.props.handleAddNewProduct(this.state.newProduct);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input className="form-control" value={this.state.newProduct} onChange={this.setNewProduct} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.addNewProduct}>Add Product</button>
        </div>
      </div>
    );
  }
}

ProductForm.propTypes = {
  handleAddNewProduct: React.PropTypes.func.isRequired
};

export default ProductForm;
