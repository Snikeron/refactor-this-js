import {
  createProductOptionTimes,
  createProductOption,
  updateProductOption,
  deleteProductOption,
  getProductOptions,
  productOptionUpdateMock,
} from '../handlers/productOptionHandler.js';

describe('Products', () => {
  it('should be able to create a new product option', async () => {
    const createdProductOption = await createProductOption();

    expect(createdProductOption.status).toBe(201);
  });

  it('should be able to update a product option', async () => {
    const createdProductOption = await createProductOption();
    const updatedProductOption = await updateProductOption(
      createdProductOption.body.ProductId,
      createdProductOption.body.Id,
    );

    expect(updatedProductOption.status).toBe(200);
    expect(updatedProductOption.body.Name).toEqual(productOptionUpdateMock.Name);
  });

  it('should be able to delete a product option', async () => {
    const createdProductOption = await createProductOption();
    const deletedProduct = await deleteProductOption(
      createdProductOption.body.ProductId,
      createdProductOption.body.Id,
    );

    expect(deletedProduct.status).toBe(204);
  });

  it('should be able to get all product options', async () => {
    await createProductOptionTimes(3);
    const productOptions = await getProductOptions();

    expect(productOptions.body.Items).toHaveLength(3);
  });
});
