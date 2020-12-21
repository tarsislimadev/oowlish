const mongoose = require("mongoose");
const { mongo } = require("./config");

mongoose.connect(
  `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
