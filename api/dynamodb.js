const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_SPECIFIC_REGION,
});

exports.dynamodb = (event, context, callback) => {
  dynamoDB
    .scan({
      TableName: "users",
    })
    .promise()
    .then((data) => callback(null, { body: JSON.stringify(data) }))
    .catch((err) => console.log(err));
};
