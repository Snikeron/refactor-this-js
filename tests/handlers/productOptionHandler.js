import request from 'supertest';
import server from '../../src/app.js';
import { createProduct } from './productHandler.js';
// import db from '../../src/database/connection';

const productMock = {
  Name: 'Floppy Phone XR',
  Description: 'Out with the flip, and old is the fold, meet your new smart floppy friend.',
  Price: 1259.50,
  DeliveryPrice: 15.99,
};

const productOptionMocks = [
  {
    Name: 'NuPurple',
    Description: 'Purple',
  },
  {
    Name: 'Platinum Beige',
    Description: 'Just a little less boring than beige',
  },
  {
    Name: 'Super White',
    Description: 'It\'s white.',
  },
];

const getProductOptionMock = () => productOptionMocks[Math.floor(Math.random() * productOptionMocks.length)];

const productOptionUpdateMock = {
  Name: 'Different Magenta',
  Description: 'Just a bit different',
};

const createProductOptionTimes = async (reps) => {
  const createdProduct = await createProduct();
  const productOptionMock = {
    ...getProductOptionMock(),
    ProductId: createdProduct.body.Id,
  };

  let step = 1;
  while (step < reps) {
    request(server)
      .post(`/products/${createdProduct.body.Id}/options`)
      .send(productOptionMock);
    step += 1;
  }
};

const createProductOption = async () => {
  const createdProduct = await createProduct();
  const productOptionMock = {
    ...getProductOptionMock(),
    ProductId: createdProduct.body.Id,
  };

  return request(server)
    .post(`/products/${createdProduct.body.Id}/options`)
    .send(productOptionMock);
};

const updateProductOption = async (productId, optionId) => request(server)
  .put(`/products/${productId}/options/${optionId}`)
  .send(productOptionUpdateMock);

const deleteProductOption = async (productId, optionId) => request(server)
  .delete(`/products/${productId}/options/${optionId}`);

const getProductOptions = async (productId) => request(server)
  .get(`/products/${productId}/options`);

export {
  productOptionUpdateMock,
  getProductOptionMock,
  createProductOptionTimes,
  createProductOption,
  updateProductOption,
  deleteProductOption,
  getProductOptions,
};
