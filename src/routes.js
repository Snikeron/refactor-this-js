import { Router } from 'express';
import { ProductOptionValidator, ProductValidator } from './validators/index.js';
import ProductController from './controllers/ProductController.js';
import ProductOptionsController from './controllers/ProductOptionsController.js';

const routes = Router();

routes.get(
  '/products',
  ProductValidator.index(),
  ProductController.index,
);

routes.get(
  '/products/:id',
  ProductValidator.getById(),
  ProductController.getById,
);

routes.post(
  '/products',
  ProductValidator.create(),
  ProductController.create,
);

routes.put(
  '/products/:id',
  ProductValidator.update(),
  ProductController.update,
);

routes.delete(
  '/products/:id',
  ProductValidator.delete(),
  ProductController.delete,
);

routes.get(
  '/products/:productid/options',
  ProductOptionValidator.index(),
  ProductOptionsController.index,
);

routes.get(
  '/products/:productid/options/:optionid',
  ProductOptionValidator.getById(),
  ProductOptionsController.getById,
);

routes.post(
  '/products/:productid/options',
  ProductOptionValidator.create(),
  ProductOptionsController.create,
);

routes.put(
  '/products/:productid/options/:optionid',
  ProductOptionValidator.update(),
  ProductOptionsController.update,
);

routes.delete(
  '/products/:productid/options/:optionid',
  ProductOptionValidator.delete(),
  ProductOptionsController.delete,
);

export default routes;
