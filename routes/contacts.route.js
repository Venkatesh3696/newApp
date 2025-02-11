import { Router } from 'express';
import {
	deleteContact,
	getAllContacts,
	getSingleContact,
	postContact,
	updateContact,
} from '../controllers/contacts.controller.js';
const router = Router();

router.get('/', getAllContacts);
router.post('/', postContact);

router.get('/:id', getSingleContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
