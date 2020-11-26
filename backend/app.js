/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productsRouter from './routes/product.js';
import usersRouter from './routes/user.js';

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
* set the products routing
 */
app.use('/api/products', productsRouter);

/**
 * set user routing
 */
app.use('/api/users', usersRouter);

export default app;
