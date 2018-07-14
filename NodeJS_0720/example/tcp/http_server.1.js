const net= require('net')
const log = console.log.bind(console)

let count = 0

const socketCallback = socket => {
    log('new connection: ', count++)

    // socket.on('end', () => log('socket end'))

    // socket.write('HTTP/1.1 200 OK\r\n\r\nhello world\r\n')

    socket.on('data', data => {
        // log('data', data.toString())
    })

    socket.on('error', err => {
        log(err)
    })

    // socket.pipe(socket)

    setTimeout(() => {
        socket.end('HTTP/1.1 200 OK\r\n\r\nhello world\r\n')
    }, 3000);
    
}

const serverListeningCallback = () => log('server listening!')

const server = net.createServer(
    // socketCallback
)

server.on('connection', socketCallback)

server.listen(3030
    // , serverListeningCallback
)

server.on('listening', serverListeningCallback)
