
module.exports = function (cluster){
  const express = require("express");
  const app = express();
  
  app.get("/", (request, response) => {
    let clusterIdentidy = cluster.worker.id;
    let currentDate = new Date();

    console.log(`Worker ${clusterIdentidy} started! ${currentDate}`);

    // Heavy task
    for (let index = 0; index < 999999999; index++) {}

    response.end(`Hello from Worker ${clusterIdentidy}`);

    console.log(`Worker ${clusterIdentidy} returned! ${currentDate}`);
  });

  app.listen(7777, () =>
    console.log(
      `Server started on port 7777! Worker ${cluster.worker.id} started!, process ${cluster.worker.process.pid}`
    )
  );
};
