const { requestListener } = require('./app')
const http = require('http')

module.exports = function worker(cluster) {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer(requestListener).listen(7779, '0.0.0.0', () => {
    console.log(
      `Worker ${process.pid} started. Running on http://localhost:7779`,
    )
  })
}
