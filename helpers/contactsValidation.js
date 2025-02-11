import Joi from 'joi';

export const contactValidationSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phoneNumber: Joi.number().required(),
	address: Joi.string(),
});
