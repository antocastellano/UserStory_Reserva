import { crearCuCrearReserva } from './crearReserva.js'
import { crearDaoReservas } from './daoReserva.js'
import { crearEnviadorDeMails } from './crearEnviadorDeMails.js'

const credenciales = ("clubortemail@gmail.com", "wmhxyrhimevxswoz")
const mailer = crearEnviadorDeMails("clubortemail@gmail.com", "wmhxyrhimevxswoz")

const dao = crearDaoReservas()
 
const cu = crearCuCrearReserva(dao, mailer)

const datos = { nombre: 'antonella' , dia: '30/06/2021' , cancha: 'numero 15' , tiempo: '2hs', email:'antonellacastellano97@gmail.com'}

await cu.ejecutar(datos)
console.log(dao)