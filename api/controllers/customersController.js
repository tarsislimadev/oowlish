const { Customer } = require('../models');

class CustomersController {

  static async list(req, res) {
    const customers = await Customer.findAll();
    res.json({ customers, });
  }

  static async listByCity(req, res) {
    const { city } = req.body;
    const customers = await Customer.findAll({ where: { city } });
    res.json({ customers, });
  }

  static async get(req, res) {
    const { id } = req.body;
    const customer = await Customer.findOne({ where: { id } });
    res.json({ customer, });
  }

}

module.exports = {
  CustomersController,
};
