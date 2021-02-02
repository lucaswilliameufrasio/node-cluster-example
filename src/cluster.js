const cluster = require('cluster')
const worker = require('./worker')

const APP_MEMORY_REQUIREMENT = 512 * 1024 * 1024 // 512MB
const CONCURRENCY = require('os').freemem / APP_MEMORY_REQUIREMENT

function master() {
  if (cluster.isMaster) {
    for (let index = 0; index < CONCURRENCY; index++) {
      cluster.fork()
    }
  } else {
    worker(cluster)
  }

  cluster.on('fork', (worker) => {
    console.log(`forked -> Worker ${worker.id}`)
  })
}

master()
