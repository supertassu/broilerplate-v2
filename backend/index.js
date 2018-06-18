require('@babel/register');
require('@babel/polyfill');
const logger = require('./src/utils/logger').default;
const port = process.env.PORT || 9000;

let started = process.hrtime();
logger.log('pending', 'Connecting to Postgres at ' + process.env.DATABASE_URL);

const database = require('./src/database');
database.sync();

logger.log('complete', [{text: 'Connected to database'}, {text: `(${process.hrtime(started)}ms)`, styles: 'white'}]);
started = process.hrtime();
logger.log('pending', 'Starting HTTP server at :' + port);

const app = require('./app');
app.start(port);

logger.log('complete', [{text: 'Listening at :' + port}, {text: `(${process.hrtime(started)}ms)`, styles: 'white'}]);
