import express from 'express';
import routes from './routes/router.js';
import { handle404 } from './middlewares/errorHandling.middleware.js';

const app = express()
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));

app.use('/api', routes)

app.use(handle404);

app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});