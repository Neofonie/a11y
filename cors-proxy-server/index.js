// Source from: https://www.npmjs.com/package/cors-anywhere
const fs = require("node:fs");
const cors_proxy = require("cors-anywhere");

// const options = {
//     key: fs.readFileSync("/etc/ssl/neofonie/privkey.pem"),
//     cert: fs.readFileSync("/etc/ssl/neofonie/fullchain.pem"),
// };

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || "0.0.0.0";

// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8443;

cors_proxy
  .createServer({
    //...options,
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
