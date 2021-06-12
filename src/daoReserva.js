const reservas = []

function crearDaoReservas() {
    return {
        guardar: async (r) => {
            reservas.push(r)
        }
    }
}

export {crearDaoReservas}