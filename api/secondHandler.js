"use strict";

module.exports.second = function (event, context, callback) {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)
  console.log("second");
  const response = {
    statusCode: 200,
    headers: {
      "x-custom-header": "My Header Value",
    },
    body: JSON.stringify({ message: "Hello second Handler!" }),
  };

  callback(null, response);
};
