const customers_data = require("./data/customers.json");
const { Customer } = require("./api/models");

// migrations
const migrate_db = async () => {
  for (let c in customers_data) {
    const customer_data = customers_data[c];
    customer_data["latitude"] = '';
    customer_data["longitude"] = '';
    const customer = new Customer(customer_data);
    await customer.save();
  }
  console.log("Database OK");
};

Promise.all([
  migrate_db(),
]);
