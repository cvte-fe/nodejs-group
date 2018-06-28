const net = require('net')
const chalk = require('chalk')
const log = console.log


const server = net.createServer(socket => {
  // 'connection' listener
  console.log('client connected')
  socket.on('end', () => console.log('client disconnected'))
  socket.write('HTTP/1.1 200 OK\r\n\r\nhello\r\n')
//   setTimeout(() => socket.write(' world'), 1000)
//   socket.pipe(socket)
  socket.destroy()
})

server.on('error', (err) => {
  throw err
})

server.listen(8808, () => {
  console.log(chalk.red.bold('server bound', server.address().port))
})


