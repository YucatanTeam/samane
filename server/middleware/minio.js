var Minio = require('minio');

// options :
// {
//     endPoint: 'play.minio.io',
//     port: 9000,
//     useSSL: true,
//     accessKey: 'Q3AM3UQ867SPQQA43P2F',
//     secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
// }
function makeMinio (options) {
    return minios.push(new Minio.Client(options));
}

var minios = [];

module.exports = function middleware(req, res, next) {
    req.minio = {
        minios,
        add: makeMinio
    };
    next();
}


// req.minio : {
//      minios : minio connections
//      add : add a minio instance
// }