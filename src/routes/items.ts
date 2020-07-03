import express from 'express';
import * as ItemsController from '../controllers/ItemsController';

const router = express.Router();

router.get('/', ItemsController.index);

router.post('/', ItemsController.store);

router.get('/:id', ItemsController.show);

router.put('/:id', ItemsController.update);

router.patch('/:id', ItemsController.update);

router.delete('/:id', ItemsController.destroy);

export default router;
