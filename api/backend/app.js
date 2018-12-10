const service = require("restana")();
const { Resolver } = require("dns").promises;
const resolver = new Resolver();
const cors = require("cors");
service.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);


service.get("/", function (req, res) {
  res.send({
    hello: "world"
  });
});

resolver.setServers(["159.69.198.101"]);

service.get("/api/:domainName", function (req, res) {
  let timeout;
  function myTimer() {
    timeout = setTimeout(() => {
      res.send({
        status: "timeout"
      });
    }, 3000);

  }
  myTimer()
  resolver.resolve(`${req.params.domainName}`)
    .then((addresses) => {
      clearTimeout(timeout)
      res.send({
        status: "passed"
      });
    }).catch((error) => {
      if (error.code === 'NOTFOUND' || error.code === 'SERVFAIL' || error.code === 'REFUSED') {
        clearTimeout(timeout)
        res.send({
          status: 'failed'
        })
      } else if (error.code === 'TIMEOUT') {
        clearTimeout(timeout)
        res.send({
          status: 'timeout'
        })
      } else if (error.code === 'ENOTFOUND' || error.code === 'NXDOMAIN' || error.code === 'NOTIMP') {
        clearTimeout(timeout)
        res.send({
          status: 'blocked'
        })
      }
    }
    )
})
service.start(3000)