"use strict";

module.exports.first = function (event, context, callback) {
  print("test");
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: JSON.stringify({ message: "Hello First Handler!" }),
  };

  callback(null, response);
};
