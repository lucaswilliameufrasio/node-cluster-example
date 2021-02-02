function mainRequestListener(req, res) {
  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      res.end(`{"data": "Hello World"}`)
      break
    case '/cluster':
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      res.end(`{"data": "${process.pid}"}`)
      break
    default:
      res.writeHead(204)
      break
  }
}

module.exports = {
  requestListener: mainRequestListener,
}
