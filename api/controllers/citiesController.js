const { sequelize } = require('../../database');
const { Customer } = require('../models');

class CitiesController {

  static async list(req, res) {
    const  cities = await Customer.findAll({
      attributes: [
        'city',
        [sequelize.fn('count', sequelize.col('id')), 'customers_total'],
      ],
      group: ['city'],
    });
    res.json({ cities, });
  }

}

module.exports = {
  CitiesController,
};
