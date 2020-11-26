/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Product from './models/product.js';

mongoose.connect('mongodb+srv://danyls:danyls@cluster0.qlso7.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

/**
 * handle cors errors
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/**
 * parse given request into a JSON
 */

app.use(bodyParser.json());

/**
 * get route
 */

app.use('/api/products', (req, res) => {
  Product.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * handle post request on route /api/product
 */
app.post('/api/product', (req, res) => {
  delete req.body._id;
  const thing = new Product({
    ...req.body,
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
});
export default app;
