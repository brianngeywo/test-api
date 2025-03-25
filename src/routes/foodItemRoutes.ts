// src/routes/foodItemRoutes.ts

import express from 'express';
import { fetchallfooditemscontroller } from '../controllers/foodItemController';

const router = express.Router();

router.get('/', fetchallfooditemscontroller);

export default router;