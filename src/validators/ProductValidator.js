import { celebrate, Segments, Joi } from 'celebrate';

const ProductValidator = {
  index: () => celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string(),
    }),
  }),
  getById: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().guid().required(),
    }),
  }),
  create: () => celebrate({
    [Segments.BODY]: Joi.object().keys({
      Name: Joi.string().required(),
      Description: Joi.string().required(),
      Price: Joi.number().required(),
      DeliveryPrice: Joi.number().required(),
    }),
  }),
  update: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().guid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      Name: Joi.string().required(),
      Description: Joi.string().required(),
      Price: Joi.number().required(),
      DeliveryPrice: Joi.number().required(),
    }),
  }),
  delete: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().guid().required(),
    }),
  }),
};

export default ProductValidator;
