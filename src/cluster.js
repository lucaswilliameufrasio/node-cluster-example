const cluster = require('cluster')
const worker = require('./worker')

const APP_MEMORY_REQUIREMENT = 512 * 1024 * 1024 // 512MB
const CONCURRENCY = require('os').freemem / APP_MEMORY_REQUIREMENT

// Round-robin choosed to be used on scheduling policy
cluster.schedulingPolicy = cluster.SCHED_RR

function master() {
  if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length

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
