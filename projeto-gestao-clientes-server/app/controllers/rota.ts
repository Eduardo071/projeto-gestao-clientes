import { Router } from "express";
import { findRota } from "../services/rota";

const router = Router();

router.get('/', async (_, res) => {
  try {
    const rota = await findRota();
    res.json(rota);
} catch (error: any) {
    res.status(500).json(error.message);
}
})

export default router;