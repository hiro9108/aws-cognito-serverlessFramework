"use strict";

module.exports.email = function (event, context, callback) {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)
  console.log("email");
  const response = {
    statusCode: 200,
    headers: {
      "x-custom-header": "My Header Value",
    },
    body: JSON.stringify({ message: "Hello email Handler!" }),
  };

  callback(null, response);
};
