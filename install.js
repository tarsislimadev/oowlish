const customers_data = require("./data/customers.json");
const { Customer } = require("./api/models");

// migrations
const migrate_db = async () => {
  for (let c in customers_data) {
    const customer_data = customers_data[c];
    customer_data["latitude"] = '';
    customer_data["longitude"] = '';
    await Customer.create(customer_data);
  }
  console.log("Database OK");
};

Promise.all([
  migrate_db(),
]);
