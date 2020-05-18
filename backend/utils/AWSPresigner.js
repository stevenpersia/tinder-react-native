const AWS = require('aws-sdk');

AWS.config = new AWS.Config({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.BUCKET_REGION
});

const Bucket = process.env.BUCKET_NAME;
const S3 = new AWS.S3();

function generateSignedGetUrl(Key) {
    return new Promise(function(resolve, reject) {
        const params = {
            Bucket,
            Key,
            Expires: 30 // 30 seconds
        };

        S3.getSignedUrl('getObject', params, (err, url) => {
            if (err) reject(err);
            else resolve(url);
        });
    });
}

module.exports.generateSignedGetUrl = generateSignedGetUrl;
