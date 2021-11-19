const cors = require('cors')
const io = require('socket.io')(3000, {
    cors: {
        origin: '*'
    }
})

io.on('connection', socket => {
    socket.on('True', data => {
        socket.broadcast.emit('joining', data)
    })
    socket.on('clint1', message => {
        socket.broadcast.emit('clint2', message)
    })
})