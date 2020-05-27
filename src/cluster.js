const cluster = require("cluster");
const server = require("./server");

// Round-robin choosed to be used on scheduling policy
cluster.schedulingPolicy = cluster.SCHED_RR;

// Verify if it is the main process
if (cluster.isMaster) {
  const cpuCount = require("os").cpus().length;

  for (let index = 0; index < cpuCount; index++) {
    cluster.fork();
  }
} else {
  server(cluster);
}

cluster.on("fork", (worker) => {
  console.log(`forked -> Worker ${worker.id}`);
});
