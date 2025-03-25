// src/routes/foodPlaceRoutes.ts

import express from 'express';
import { getfoodplacescontroller, getfoodplacebyidcontroller } from '../controllers/foodPlaceController';

const router = express.Router();

router.get('/', getfoodplacescontroller);
router.get('/:id', getfoodplacebyidcontroller);

export default router;