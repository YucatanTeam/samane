var Minio = require('minio');

<<<<<<< HEAD
var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'XXT3LZZZ3HQN6U3AIBB8',
    secretKey: '4GQmWzbPWPsYXCtbby4+z65rrtvjXvo3+2lgM1FQ'
});
=======
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
>>>>>>> d836b50c7105d713d36320b49c39ef84c618447f

module.exports = function middleware(req, res, next) {
    req.minio = {
        minios,
        add: makeMinio
    };
    next();
}