import express from 'express'
import CUFactory from './CUFactory.js'

const router = express.Router()

router.post('/reserva', async (req, res) => {
    const CU_confirmarReserva = CUFactory.crearCU_confirmarReserva()
    const reserva = await CU_confirmarReserva.ejecutar(req.body)
    res.json({reserva})
})

export default router