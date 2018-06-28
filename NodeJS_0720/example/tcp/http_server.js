const net= require('net')
const log = console.log.bind(console)

const socketCallback = socket => {
    log('new connection')

    socket.on('end', () => log('socket end'))

    socket.write('HTTP/1.1 200 OK\r\nContent-Length: 10\r\n\r\nhello world\r\n')

    socket.on('data', data => {
        log('data', data.toString())
    })

    socket.on('error', err => {
        log(err)
    })

    // socket.pipe(socket)

    // socket.end()
}

const serverListeningCallback = () => log('server listening!')

const server = net.createServer(
    // socketCallback
)

server.on('connection', socketCallback)

server.listen(3033
    // , '172.18.91.150'
    // , serverListeningCallback
)

server.on('listening', serverListeningCallback)
