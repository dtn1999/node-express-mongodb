/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Thing from './models/thing.js';

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

app.use('/api/things', (req, res) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * get element by id
 */
app.get('/api/things/:id', (req, res) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});
/**
 * handle post request on route /api/Thing
 */
app.post('/api/thing', (req, res) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * handle update
 */
app.put('/api/thing/:id', (req, res) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * handle deletion
 */
app.delete('/api/thing/:id', (req, res) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * ========================= Handle stuff about products =======================
 */

/**
  * get all products
  */
app.get('/api/products', (req, res) => {

});

/**
  *
  */
app.get('/api/products', (req, res) => {

});
export default app;
