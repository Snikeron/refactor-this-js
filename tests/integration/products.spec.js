// import db from '../../src/database/connection';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  productUpdateMock,
} from '../handlers/productHandler.js';

describe('Products', () => {
  it('should be able to create a new product', async () => {
    const createdProduct = await createProduct();

    expect(createdProduct.status).toBe(201);
  });

  it('should be able to update a product', async () => {
    const createdProduct = await createProduct();
    const updatedProduct = await updateProduct(createdProduct.body.Id);

    expect(updatedProduct.status).toBe(200);
    expect(updatedProduct.body.Price).toEqual(productUpdateMock.Price);
  });

  it('should be able to delete a product', async () => {
    const createdProduct = await createProduct();
    const deletedProduct = await deleteProduct(createdProduct.body.Id);

    expect(deletedProduct.status).toBe(204);
  });

  it('should be able to get all products', async () => {
    await createProduct();
    await createProduct();
    const products = await getProducts();

    expect(products.body.Items).toHaveLength(2);
  });
});
