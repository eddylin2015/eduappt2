'use strict';

const hostname = '192.168.62.199';
const port = 8001;

const path = require('path');
const express = require('express');
const config = require('./config');

const app = express();

app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', true);
app.use(express.static(path.join(__dirname,'www')));
// T2
app.use('/T2', require('./T2/crud'));
app.use('/api/T2', require('./T2/api'));

// Redirect root to /books
app.get('/', (req, res) => {
  res.redirect('/T2');
});

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

const server = app.listen(config.get('PORT'),'192.168.62.199', () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});

