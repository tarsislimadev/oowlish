const customers_data = require("./migrations/customers.json");
const { Customer } = require("./api/models");

require('./database');

const db_connection = async () => {
  let ok = false;
  do {
    try {
      await Customer.findAll();
      ok = true;
    } catch (e) {
      ok = false;
    }
  } while(!ok);
};

// migrations
const migrate_db = async () => {
  await db_connection();

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
