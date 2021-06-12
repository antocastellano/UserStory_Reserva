import express from 'express'
import reservaRouter from './reservaRouter.js'

const app = express()

app.use('/reserva',express.json())

app.use(reservaRouter)

app.listen(3002,() => {
console.log('todo ok, conectado')
}
)