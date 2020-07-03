import express from 'express';
import { List } from '../models';

export const index = (req : express.Request, res : express.Response) => {
	List.findAll()
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const show = (req : express.Request, res : express.Response) => {
	List.findByPk(req.params.id)
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const store = (req : express.Request, res : express.Response) => {
	List.create({ name: req.body.name })
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const update = (req : express.Request, res : express.Response) => {
	List.findByPk(req.params.id)
		.then((data) => {
			const list = data;
			list.name = req.body.name;
			return list.save();
		})
		.then((data) => res.json({ data }))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};

export const destroy = (req : express.Request, res : express.Response) => {
	List.destroy({ where: { id: req.params.id } })
		.then(() => res.sendStatus(204))
		.catch((err) => res.status(500).json({
			name: err.name,
			message: err.message,
		}));
};
