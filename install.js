const customers_data = require("./data/customers.json");
const { Customer } = require("./api/models");

const migrate_db = async () => {
  for (let c in customers_data) {
    const customer = new Customer(customers_data[c]);
    await customer.save();
  }
  console.log("Database OK");
};

Promise.all([
  migrate_db(),
]);
