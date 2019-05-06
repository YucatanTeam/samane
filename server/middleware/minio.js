var Minio = require('minio');

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'XXT3LZZZ3HQN6U3AIBB8',
    secretKey: '4GQmWzbPWPsYXCtbby4+z65rrtvjXvo3+2lgM1FQ'
});

module.exports = function middleware(req, res, next) {
    req.minio = minioClient;
    next();
}