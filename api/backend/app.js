var express = require('express')
// const lookup = require('dns-lookup')
var app = express()
const {
    Resolver
} = require('dns').promises;
const resolver = new Resolver();
var cors = require('cors');
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));


resolver.setServers(['108.61.201.119']);

app.get('/', function (req, res) {
    res.json({
        hello: "world"
    })
})

app.get('/api/:domainName', function (req, res) {
    // console.log(`${req.params.domainName}`)
    resolver.resolve(`${req.params.domainName}`).then((addresses) => {
        // console.log(addresses)
        res.json({
            status: 'passed'
        })
    }).catch(function (error) {
        if (error.code === 'ENOTFOUND') {
            res.json({
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
app.listen(3000)