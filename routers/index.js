const express = require('express');

const mascotasRouter = require('./mascotas.router');

function routerApi(app) {
  const router = express.Router();
  app.use(router);
  router.use('/mascotas', mascotasRouter);
}

module.exports = routerApi;
