import mongoose from 'mongoose';

export const connectToDb = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log('Error connecting to MongoDB:', error.message);
	}
};
