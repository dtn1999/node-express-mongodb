import Product from '../models/product.js';

export default {
  getAllProducts: (req, res) => {
    Product.find()
      .then((products) => {
        res.status(200).json({ products });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
  getProductById: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        res.status(200).json({ product });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
  createProduct: (req, res) => {
    const newProduct = new Product({
      ...req.body,
    });
    newProduct.save()
      .then((savedProduct) => {
        res.status(200).json({ product: savedProduct });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
  updateProduct: (req, res) => {
    Product.updateOne({ _id: req.params.id }, {
      ...res.body, _id: req.params.id,
    })
      .then(() => {
        res.status(203).json({ message: 'Modified!' });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: 'Deleted!' });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

};
