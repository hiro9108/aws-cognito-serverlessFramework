"use strict";

const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: process.env.AWS_SPECIFIC_REGION });

exports.email = async function (event) {
  const params = {
    Destination: {
      ToAddresses: [process.env.TO_ADDRESSES],
    },
    Message: {
      Body: {
        Text: { Data: "Test SES" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: process.env.FROM_ADDRESSES,
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => console.log(data.MessageId))
    .catch((err) => console.log(err));
};
