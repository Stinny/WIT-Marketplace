const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
  accessKeyId: process.env.AWS_A_KEY,
  secretAccessKey: process.env.AWS_S_KEY,
  Bucket: process.env.AWS_BUCK_NAME,
});

const upoloadToS3 = (file) => {
  const params = {
    Bucket: process.env.AWS_BUCK_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };

  return s3.upload(params).promise();
};

module.exports = upoloadToS3;
