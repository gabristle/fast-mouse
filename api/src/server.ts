import express from 'express'
import cors from 'cors'
import compression from 'compression'
import http, { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'

const app = express()
app.use(express.json())
const server = createServer(app)
const io = new SocketIOServer(server, {
    cors: {
      origin: '*'
    }
})

let connectedUsers: { [key: string]: { displayName: string; id: string } } = {};

app.use(cors())
app.use(compression())

io.on('connection', socket => {
    console.log('Usuario conectado: ', socket.id)

    socket.on('disconnect', reason => {
        console.log('usuario desconectado: ', socket.id)
        delete connectedUsers[socket.id]
        io.emit('users', Object.values(connectedUsers))
    })

    socket.on('set_user', user => {
        socket.data.displayName = user.displayName
        socket.data.id = user.uid

        connectedUsers[socket.id] = {
            displayName: socket.data.displayName,
            id: socket.data.id,
        };

        console.log('Usuario definido:', socket.data.displayName, socket.data.id)
        io.emit('users', Object.values(connectedUsers))
    })
})

server.listen(3000, () => {
    console.log('running...')
})