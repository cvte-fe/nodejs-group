const net= require('net')
const log = console.log.bind(console)

const socketCallback = socket => {
    log('new connection')

    socket.on('end', () => log('socket end'))

    socket.write('message from server\n')

    socket.on('data', data => {
        log(data)
        socket.write('copied!\n')
    })

    // socket.pipe(socket)

    // socket.destroy()
}

const serverListeningCallback = () => log('server listening!')

const server = net.createServer(
    // socketCallback
)

server.on('connection', socketCallback)

server.listen(3033
    // , serverListeningCallback
)

server.on('listening', serverListeningCallback)
