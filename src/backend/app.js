const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

require('./database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api', require('./api/routes'));

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 400);
  res.json({ error: 'Page not found' });
});

module.exports = app;
