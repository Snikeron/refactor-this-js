import { celebrate, Segments, Joi } from 'celebrate';

const ProductOptionValidator = {
  index: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      productid: Joi.string().guid().required(),
    }),
  }),
  getById: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      productid: Joi.string().guid().required(),
      optionid: Joi.string().guid().required(),
    }),
  }),
  create: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      productid: Joi.string().guid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      Name: Joi.string().required(),
      Description: Joi.string().required(),
    }),
  }),
  update: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      productid: Joi.string().guid().required(),
      optionid: Joi.string().guid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      Name: Joi.string().required(),
      Description: Joi.string().required(),
    }),
  }),
  delete: () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      productid: Joi.string().guid().required(),
      optionid: Joi.string().guid().required(),
    }),
  }),
};

export default ProductOptionValidator;
