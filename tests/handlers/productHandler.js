import request from 'supertest';
import server from '../../src/app.js';
// import db from '../../src/database/connection';

const productMocks = [
  {
    Name: 'Floppy Phone XR',
    Description: 'Out with the flip, and old is the fold, meet your new smart floppy friend.',
    Price: 1259.50,
    DeliveryPrice: 15.99,
  },
  {
    Name: 'Moto StarTech',
    Description: 'Whip and flip, and move those lips. This blast from the past will get heads turning.',
    Price: 869.95,
    DeliveryPrice: 15.99,
  },
  {
    Name: 'Knowgear 5395',
    Description: 'Drop your phone often? Sick of fixing those shattered screens? Knowgear has the solution.',
    Price: 112.50,
    DeliveryPrice: 6.99,
  },
];

const getProductMock = () => productMocks[Math.floor(Math.random() * productMocks.length)];

const productUpdateMock = {
  ...productMocks[Math.floor(Math.random() * productMocks.length)],
  Price: 1399.99,
};

const createProduct = async () => request(server)
  .post('/products')
  .send(getProductMock());

const updateProduct = async (id) => request(server)
  .put(`/products/${id}`)
  .send(productUpdateMock);

const deleteProduct = async (id) => request(server)
  .delete(`/products/${id}`);

const getProducts = async () => request(server)
  .get('/products');

export {
  productMocks,
  productUpdateMock,
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
};
