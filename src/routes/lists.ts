import express from 'express';
import * as ListsController from '../controllers/Lists';

const router = express.Router();

router.get('/', ListsController.index);

router.post('/', ListsController.store);

router.get('/:id', ListsController.show);

router.put('/:id', ListsController.update);

router.patch('/:id', ListsController.update);

router.delete('/:id', ListsController.destroy);

export default router;
