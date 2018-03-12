import express from 'express';
import { randomUsername } from './utils';

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', req.headers.origin || req.headers.host); // '*'
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

const SIMULATE_LATENCY_TIMEOUT = 400;

app.get('/users', (req, res) => {
	setTimeout(() => {
		return res.status(200).json([
			{
				username: 'bob',
				id: Math.random(),
			},
			{
				username: 'jane',
				id: Math.random(),
			},
		]);
	}, SIMULATE_LATENCY_TIMEOUT);
});

app.get('/users/new', (req, res) => {
	setTimeout(() => {
		return res.status(200).json({
			username: randomUsername(),
			id: Math.random(),
		});
	}, SIMULATE_LATENCY_TIMEOUT);
});

app.use((req, res) => res.status(200).json({ success: 'Hello world' }));

export default app;
