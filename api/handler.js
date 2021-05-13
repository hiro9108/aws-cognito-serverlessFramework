"use strict";

module.exports.hello = function (event, context, callback) {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)
  console.log("demo");
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type authorization",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({ message: "Hello World!" }),
  };

  callback(null, response);
};
