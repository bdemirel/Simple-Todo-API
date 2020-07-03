import express from 'express';
import { Item } from '../models';

export const index = (req : express.Request, res : express.Response) => {
	Item.findAll()
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const show = (req : express.Request, res : express.Response) => {
	Item.findByPk(req.params.id)
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const store = (req : express.Request, res : express.Response) => {
	Item.create({ name: req.body.name, list_id: req.body.listId })
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const update = (req : express.Request, res : express.Response) => {
	Item.findByPk(req.params.id)
		.then((data) => {
			const item = data;
			item.name = req.body.name;
			return item.save();
		})
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const destroy = (req : express.Request, res : express.Response) => {
	Item.destroy({ where: { id: req.params.id } })
		.then(() => res.sendStatus(204))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};
