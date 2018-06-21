import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import httpLogger from './src/utils/http-logger';

import * as greetings from './src/controllers/greetings';

const app = new Koa();
const router = new Router();

app.use(httpLogger);
app.use(bodyParser());

router.get('/', ctx => {
	ctx.body = 'Hello!';
	ctx.status = 200;
});

router.get('/greetings', greetings.list);
router.post('/greetings', greetings.create);

router.get('/error', _ => {
	throw new Error('something failed, ur bad!');
});

app
	.use(router.routes())
	.use(router.allowedMethods());

export const start = port => {
	app.listen(port);
};
