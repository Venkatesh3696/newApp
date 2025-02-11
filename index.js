import express from 'express';
import contactsRoute from './routes/contacts.route.js';
import { connectToDb } from './helpers/connectDb.js';
import { configDotenv } from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;

configDotenv();
connectToDb();
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send({ success: true, message: 'Welcome to contacts api' });
});

app.use('/api/v1/contacts', contactsRoute);

app.listen(PORT, () => {
	console.log(`App is listening at PORT ${PORT}`);
});
