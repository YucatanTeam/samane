var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'XXT3LZZZ3HQN6U3AIBB8',
    secretKey: '4GQmWzbPWPsYXCtbby4+z65rrtvjXvo3+2l'
});

// File that needs to be uploaded.
var file = '/root/Downloads/telegram.png'

// Make a bucket called samane.
minioClient.makeBucket('samane', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully.')

    var metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
    }
    // Using fPutObject API upload your file to the bucket samane.
    minioClient.fPutObject('samane', 'telegram.png', file, metaData, function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });
});