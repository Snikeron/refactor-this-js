import db from '../database/connection.js';
import generateId from '../utils/generateId.js';

const ProductOptionsController = {
  async index(req, res) {
    const { productid } = req.params;
    let productOptions = [];

    productOptions = await db('product_options')
      .where('ProductId', productid)
      .select('*');

    res.header('X-Total-Count', productOptions.length);

    return res.json({ Items: productOptions });
  },

  async getById(req, res) {
    const { productid, optionid } = req.params;

    const productOption = await db('product_options')
      .where({
        Id: optionid,
        ProductId: productid,
      })
      .select('*')
      .first();

    if (!productOption) return res.sendStatus(404);

    return res.json(productOption);
  },

  async create(req, res) {
    const { productid } = req.params;
    const { Name, Description } = req.body;
    const Id = generateId();

    try {
      const execStatus = await db('product_options').insert({
        Id,
        ProductId: productid,
        Description,
        Name,
      });

      if (!execStatus) return res.sendStatus(500);

      return res
        .status(201)
        .json({ response: `New product option ${Id} successfully created!` });
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },

  async update(req, res) {
    const { productid, optionid } = req.params;

    try {
      const execStatus = await db('product_options')
        .where({
          Id: optionid,
          ProductId: productid,
        })
        .update({ ...req.body });

      if (!execStatus) return res.sendStatus(404);

      return res.status(200).send();
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },

  async delete(req, res) {
    const { productid, optionid } = req.params;

    try {
      const execStatus = await db('product_options')
        .where({
          Id: optionid,
          ProductId: productid,
        })
        .delete();

      if (!execStatus) return res.sendStatus(404);

      return res.status(204).send();
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },
};

export default ProductOptionsController;
