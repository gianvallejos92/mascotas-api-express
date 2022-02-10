const express = require('express');

const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const mascotas = service.find();
  res.json(mascotas);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const mascotas = service.findOne(id);
  res.json(mascotas);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevaMascota = service.create(body);
  res.status(201).json(nuevaMascota);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateMascota = service.update(id, body);
  res.json(updateMascota);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteMascota = service.delete(id);
  res.json({
    message: 'Mascota eliminada'
  });
});

module.exports = router;
