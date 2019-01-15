const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    apiVersion: 'latest',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-central-1',
    signatureVersion: 'v4'
})

const generatePreSignedUrl = (operation, bucket, key, expiresIn = 60) => {
    const params = {
        Bucket: bucket,
        Key: key,
        Expires: expiresIn
    }

    return new Promise((resolve, reject) => {
        s3.getSignedUrl(operation, params, (err, url) => {
            if (err) {
                reject(err)
            } else {
                resolve(url)
            }
        })
    })
}

module.exports = { generatePreSignedUrl }
