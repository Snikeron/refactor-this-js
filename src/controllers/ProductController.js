import db from '../database/connection.js';
import generateId from '../utils/generateId.js';

const ProductController = {
  async index(req, res) {
    const isQuery = JSON.stringify(req.query) !== '{}';
    const { name: nameQuery } = req.query;
    const [count] = await db('products').count();
    let products = [];

    if (isQuery && !nameQuery) {
      return res.sendStatus(404);
    } if (nameQuery) {
      products = await db('products')
        .where('Name', 'like', `%${nameQuery}%`)
        .select('*');
    } else {
      products = await db('products').select('*');
    }

    res.header('X-Total-Count', count['count(*)']);
    return res.json({ Items: products });
  },

  async getById(req, res) {
    const { id } = req.params;

    const product = await db('products')
      .where('Id', id)
      .select('*')
      .first();

    if (!product) return res.sendStatus(404);

    return res.json(product);
  },

  async create(req, res) {
    const {
      Name, Description, Price, DeliveryPrice,
    } = req.body;
    const Id = generateId();

    try {
      const execStatus = await db('products').insert({
        Id,
        Name,
        Description,
        Price,
        DeliveryPrice,
      });

      if (!execStatus) return res.sendStatus(500);

      return res
        .status(201)
        .json({
          Id,
          Name,
          Description,
          Price,
          DeliveryPrice,
        });
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      const execStatus = await db('products')
        .where('Id', id)
        .update({ ...req.body });

      if (!execStatus) return res.sendStatus(404);

      return res
        .status(200)
        .send({ ...req.body });
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const productExecStatus = await db('products').where('Id', id).delete();
      await db('product_options').where('ProductId', id).delete();

      if (!productExecStatus) return res.sendStatus(404);

      return res.status(204).send();
    } catch (error) {
      console.error(error);

      return res.sendStatus(500);
    }
  },
};

export default ProductController;
