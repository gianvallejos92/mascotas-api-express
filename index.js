const express = require('express');
const routerApi = require('./routers');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  })
});

routerApi(app);

app.listen(port, () => {
  console.log('Estoy ejecutando un server en el puerto ' + port);
});
