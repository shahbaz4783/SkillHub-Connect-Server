import express from 'express';
import routes from './routes/router.js';

const app = express()
const port = process.env.PORT || 8000;

app.use('/api', routes)

app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});