const service = require('restana')();
const {
    Resolver
} = require('dns').promises;
const resolver = new Resolver();
const cors = require('cors');
service.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));


resolver.setServers(['159.69.198.101']);
service.get('/', function (req, res) {
    res.send({
        hello: "world"
    })
})
service.get('/api/:domainName', function (req, res) {
    // console.log(`${req.params.domainName}`)
    resolver.resolve(`${req.params.domainName}`).then((addresses) => {
        // console.log(addresses)
        res.send({
            status: 'passed'
        })
    }).catch(function (error) {
        if (error.code === 'ENOTFOUND') {
            res.send({
                status: 'failed'
            })
        }
        // console.log(error);
    });
    // lookup(function (err, address, family) {

    //     if (address === null) {
    //         console.log(`${req.params.domainName} has been blocked`)
    //         res.json({
    //             status: 'failed'
    //         })
    //     } else {
    //         console.log(`${req.params.domainName} is not block`)
    //         res.json({
    //             status: 'passed'
    //         })
    //     }
    // })

})
service.start(3000)