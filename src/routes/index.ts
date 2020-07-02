import express from 'express';
import lists from './lists';
import items from './items';

const router = express.Router();

router.use('/lists', lists);
router.use('/items', items);

export default router;
