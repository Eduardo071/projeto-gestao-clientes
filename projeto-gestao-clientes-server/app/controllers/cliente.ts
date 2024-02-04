import { Router } from "express";
import { findClientes, saveClientes } from "../services/cliente";

const router = Router();

router.get('/', async (req, res) => {
  const params: any = req.query;
  
  const clientesList = await findClientes(params);
  res.json(clientesList);
})

router.post('/', async (req, res) => {
  try {
    const newCliente = req.body;
    const createdCliente = await saveClientes(newCliente);
    res.status(201).json(createdCliente);
} catch (error: any) {
    res.status(500).json(error.message);
}
})

export default router;