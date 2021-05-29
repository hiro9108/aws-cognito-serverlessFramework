"use strict";

module.exports.second = function (event, context, callback) {
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({ message: "Hello Second test!" }),
  };

  callback(null, response);
};
