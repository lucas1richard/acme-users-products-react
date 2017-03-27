import React from 'react';

import ProductForm from './ProductForm';
import Product from './Product';

const ProductsList = ({ products, handleAddNewProduct, handleRemoveProduct }) => (
  <div>
    <ProductForm handleAddNewProduct={handleAddNewProduct} />
    <ul className="list-group">
      {products.map(product => (
        <Product
        key={product.id}
        product={product}
        handleRemoveProduct={handleRemoveProduct}
      />))}
    </ul>
  </div>
);

ProductsList.propTypes = {
  products: React.PropTypes.array.isRequired,
  handleAddNewProduct: React.PropTypes.func.isRequired,
  handleRemoveProduct: React.PropTypes.func.isRequired
};

export default ProductsList;
