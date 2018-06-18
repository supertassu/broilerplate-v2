import Greeting from '../models/greeting';

/**
* @api {get} /greetings  Lists all greetings stored in the database
* @param {object} ctx Koa context
*/
exports.list = async ctx => {
	const greetings = await Greeting.findAll();
	const greetingsJSON = await Promise.all(greetings.map(greeting => greeting.toJSON()));

	ctx.body = {
		results: greetingsJSON,
		request: {
			count: greetingsJSON.length
		}
	};
	ctx.status = 200;
};

/**
* @api {post} /greetings  Create a greeting
* @param {object} ctx Koa context
*/
exports.create = async ctx => {
	const params = ctx.request.body;
	const greeting = await Greeting.create({text: params.text, language: params.language});

	ctx.body = await greeting.toJSON();
	ctx.status = 201;
};
