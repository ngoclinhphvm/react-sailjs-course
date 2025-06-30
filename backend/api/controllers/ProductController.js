/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async function (req, res) {
    const products = await Product.find();
    return res.json(products);
  },
  findOne: async function (req, res) {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.notFound();
    return res.json(product);
  },
  create: async function (req, res) {
    const { name, price } = req.body;
    const newProduct = await Product.create({ name, price }).fetch();
    return res.status(201).json(newProduct);
  },
  update: async function (req, res) {
    const { name, price } = req.body;
    const updated = await Product.updateOne({ id: req.params.id }).set({
      name,
      price,
    });
    if (!updated) return res.notFound();
    return res.json(updated);
  },
  delete: async function (req, res) {
    const deleted = await Product.destroyOne({ id: req.params.id });
    if (!deleted) return res.notFound();
    return res.json({
      message: "Deleted successfully",
      deletedProduct: res.json(deleted),
    });
  },
};
