// src/routes/menuRoutes.ts
import express from 'express';
import { getfoodmenus } from '../controllers/menuController';

const router = express.Router();

router.get('/', getfoodmenus);

export default router;