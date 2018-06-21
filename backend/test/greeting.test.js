import test from 'ava';
import request from 'supertest';
import waitForLocalhost from 'wait-for-localhost';

test('get all greetings', async t => {
	await waitForLocalhost(9000);

	const res = await request('http://localhost:9000')
		.get('/greetings')
		.send();

	t.is(res.headers['content-type'], 'application/json; charset=utf-8', 'should respond utf-8 json');
	t.is(res.status, 200, 'should respond with \'200 OK\'');
	t.is(res.body.results.length, res.body.request.count, 'should tell result lenght correctly');
});

test('should create a new greeting', async t => {
	await waitForLocalhost(9000);

	const res = await request('http://localhost:9000')
		.post('/greetings')
		.send({text: 'hello there', language: 'en_UK'});

	t.is(res.headers['content-type'], 'application/json; charset=utf-8', 'should respond utf-8 json');
	t.is(res.status, 201, 'should respond with \'201 Created\'');
	t.is(res.body.language, 'en_UK', 'should respond with created greeting');
	t.is(res.body.text, 'hello there', 'should respond with created greeting');
});

test('should fallback for en_US in locale', async t => {
	const res = await request('http://localhost:9000')
		.post('/greetings')
		.send({text: 'hi there'});

	t.is(res.headers['content-type'], 'application/json; charset=utf-8', 'should respond utf-8 json');
	t.is(res.status, 201, 'should respond with \'201 Created\'');
	t.is(res.body.text, 'hi there', 'should respond with created greeting');
	t.is(res.body.language, 'en_US', 'should fallback for en_US in locale');
});

test('should not create a greeting without text', async t => {
	await waitForLocalhost(9000);

	const res = await request('http://localhost:9000')
		.post('/greetings')
		.send({language: 'en_UK'});

	t.is(res.status, 400, 'should respond with \'400 Bad Request\'');
	t.is(res.res.text, '400 SAVING_ERROR: No additional info provided', 'should respond with error message');
});

