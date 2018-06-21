const port = process.env.PORT || 9000;
const logger = require('../../src/utils/logger').default;
const database = require('../../src/database');
const app = require('../../app');

(async () => {
	logger.enabled = process.env.DEBUG === 'true';
	await database.sync({force: true});
	await app.start(port);
})();
