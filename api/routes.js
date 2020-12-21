const express = require('express');
const router = express.Router();

const {
  CustomersController, 
  CitiesController,
} = require('./controllers');

router.all('/', (req, res) => res.json({ api: 'Oowlish' }));

router.post('/cities', CitiesController.list);

router.post('/customers-by-city', CustomersController.listByCity);

router.post('/customer', CustomersController.get);

module.exports = router;
