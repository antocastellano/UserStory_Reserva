import { crearCuCrearReserva } from './crearReserva.js'
import { crearDaoReservas } from './daoReserva.js'
import { crearEnviadorDeMails } from './crearEnviadorDeMails.js'

const credenciales = ("clubortemail@gmail.com", "wmhxyrhimevxswoz")

const mailer = crearEnviadorDeMails("clubortemail@gmail.com", "wmhxyrhimevxswoz")

const dao = crearDaoReservas()

function crearCU_confirmarReserva() { 
const CU_reserva = crearCuCrearReserva(dao, mailer)
return CU_reserva
}

export default {
    crearCU_confirmarReserva
}