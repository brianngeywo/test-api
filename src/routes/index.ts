// src/routes/index.ts

import express from 'express';
import foodPlaceRoutes from './foodPlaceRoutes';
import foodItemRoutes from './foodItemRoutes';
import menuRoutes from './menuRoutes';

const router = express.Router();

router.use('/foodplaces', foodPlaceRoutes);
router.use('/fooditems', foodItemRoutes);
router.use('/menus', menuRoutes);

export default router;