import React from 'react';

const Product = ({ product, handleRemoveProduct }) => (
  <li className="list-group-item clearfix">
    { product.name }
    <button className="btn btn-warning pull-right" onClick={ () => handleRemoveProduct(product) }>
      <span className="glyphicon glyphicon-trash" />
    </button>
  </li>
);

Product.propTypes = {
  product: React.PropTypes.object.isRequired,
  handleRemoveProduct: React.PropTypes.func.isRequired
};

export default Product;
