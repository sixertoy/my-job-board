/* eslint
  no-console: 0
  import/no-extraneous-dependencies: 0 */
/**
 *
 * Smart Companion Editor Server
 *
 */
// const cors = require('cors');
const path = require('path');
// const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
// const simplelogger = require('expressjs-simple-logger');

// application
// const routes = require('./routes');

const config = {
  // defined by foreman
  port: process.env.PORT || 3100,
  public: path.join(__dirname, 'databases')
};

const server = express();
server.disable('x-powered-by');
// server.use(cors());
// server.use(helmet());
server.use(compression());
// server.use(simplelogger());
server.use(express.static(config.public));
server.use(bodyParser.json({ limit: '50mb' }));

// Aplication Routers
/*
server.use((req, res, next) => {
  req.publicpath = config.public;
  next();
}).use('/', routes);

server.listen(config.port, () => {
  const msg = `My Job Board API server is running under http://localhost:${config.port}`;
  console.log(colorize(msg, 'green'));
  return true;
});
*/
