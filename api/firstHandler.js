"use strict";

module.exports.first = function (event, context, callback) {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type authorization",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({ message: "Hello First Handler!" }),
  };

  callback(null, response);
};