import mongoose from 'mongoose';

export const contactSchema = new mongoose.Schema(
	{
		name: {
			required: true,
			type: String,
		},
		email: {
			required: true,
			type: String,
		},
		phoneNumber: {
			required: true,
			type: String,
		},
		Address: {
			required: false,
			type: String,
		},
	},
	{ timestamps: true },
);

export const Contact = mongoose.model('Contact', contactSchema);
