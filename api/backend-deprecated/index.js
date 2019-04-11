// const service = require("restana")();
const port = process.env.PORT || 3000;
const express = require("express");
const AbortController = require("abort-controller");
const { Resolver } = require("dns").promises;
const resolver = new Resolver();
var app = express();
app.use(express.json());
// const cors = require("cors");
// app.use(
//   cors({
//     allowedHeaders: ["sessionId", "Content-Type"],
//     exposedHeaders: ["sessionId"],
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
//   })
// );

app.get("/", function(req, res) {
  res.json({
    hello: "world"
  });
});

resolver.setServers(["159.69.198.101"]);

app.get("/:domainName", function(req, res) {
  let controller = new AbortController();
  let signal = controller.signal;
  let timeout = 3000;

  function myTimer() {
    timeout = setTimeout(() => {
      controller.abort();
      res.json({
        status: "timeout"
      });
    }, timeout);
  }
  myTimer();
  resolver
    .resolve(`${req.params.domainName}`)
    .then(addresses => {
      clearTimeout(timeout);
      res.json({
        status: "passed"
      });
    })
    .catch(error => {
      if (
        error.code === "NOTFOUND" ||
        error.code === "SERVFAIL" ||
        error.code === "REFUSED"
      ) {
        clearTimeout(timeout);
        res.json({
          status: "failed"
        });
      } else if (error.code === "TIMEOUT") {
        clearTimeout(timeout);
        res.json({
          status: "timeout"
        });
      } else if (
        error.code === "ENOTFOUND" ||
        error.code === "NXDOMAIN" ||
        error.code === "NOTIMP"
      ) {
        clearTimeout(timeout);
        res.json({
          status: "blocked"
        });
      }
    });
});
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server ready on port ${port}`);
});
