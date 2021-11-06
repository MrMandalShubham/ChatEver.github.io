const cors = require('cors')
const io = require('socket.io')(3000,{
    cors:{
        origin: '*'
    }
})

io.on('connection', socket =>{
    socket.emit('wellcome','Wellcome to Chat_Ever')
    socket.on('clint1',message =>{
        console.log(message);
        socket.broadcast.emit('clint2',message)
    })
})
