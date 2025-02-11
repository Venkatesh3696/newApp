import { contactValidationSchema } from '../helpers/contactsValidation.js';
import { Contact } from '../models/contact.model.js';

export const getAllContacts = async (req, res) => {
	try {
		const contacts = await Contact.find();

		res.status(200).send({ contacts });
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};

export const postContact = async (req, res) => {
	try {
		const { error } = contactValidationSchema.validate(req.body);
		if (error) {
			console.error(error);
			return res.status(400).send({ message: error.details[0].message });
		}

		const contact = new Contact(req.body);
		await contact.save();
		res.send(contact);
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};

export const getSingleContact = async (req, res) => {
	const { id } = req.params;
	try {
		const contact = await Contact.findById(id);
		if (!contact) {
			res.status(404).send({ message: 'contact not found' });
		}
		res.status(200).send({ contact });
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};

export const updateContact = async (req, res) => {
	const { id } = req.params;
	try {
		const { error } = contactValidationSchema.validate(req.body);
		if (error) {
			console.error(error);
			return res.status(400).send({ message: error.details[0].message });
		}

		const contact = await Contact.findByIdAndUpdate(id, req.body);
		if (!contact) {
			res.status(404).send({ message: 'contact not found' });
		}
		res.status(200).send({
			message: 'contact updated successfully',
		});
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};

export const deleteContact = async (req, res) => {
	const { id } = req.params;
	try {
		const contact = await Contact.findByIdAndDelete(id);
		if (!contact) {
			res.status(404).send({ message: 'contact not found' });
		}
		res.status(200).send({
			message: 'contact deleted successfully',
		});
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};
