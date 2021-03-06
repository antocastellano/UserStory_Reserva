import Reserva from './Reserva.js'
import generarPDF from './generarPDF.js'

function crearCuCrearReserva(daoReserva, mailer) {
    return {
       async ejecutar (datos){
            const reserva = new Reserva(datos)
            await daoReserva.guardar(reserva)
            await generarPDF(reserva)
            await mailer.enviarConAdjunto(`remitente`, reserva.email , `Prueba Text`, `Prueba con texto plano`, `./${reserva.nombre}.pdf`)
        }
    }
}

export {crearCuCrearReserva}