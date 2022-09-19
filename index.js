const express = require("express");
require("dotenv").config();

const app = express();
const spauth = require("node-sp-auth");
const request = require("request-promise");

let login = process.env.LOGIN;
let password = process.env.PASSWORD;

app.set("port", process.env.PORT || 5000);

app.get("/:nomeLista", function (req, res) {
  spauth
    .getAuth(`https://${process.env.DOMAIN}.sharepoint.com/sites/dev/`, {
      username: login,
      password: password,
      domain: process.env.DOMAIN,
    })
    .then((data) => {
      let headers = data.headers;
      headers["Accept"] = "application/json;odata=verbose";

      request
        .get({
          url: `https://${process.env.DOMAIN}.sharepoint.com/sites/<O365GroupHere>/_api/web/lists/GetByTitle('${req.params.nomeLista}')/items`,
          headers: headers,
          json: true,
          rejectUnauthorized: false,
        })
        .then((response) => {
          let data = `<?xml version="1.0" encoding="UTF-8"?>`;
          data += "<products>";
          response.d.results.map(
            (result) => (data += `<item><name>${result.Title}</name></item>`)
          );
          data += "</products>";

          res.header("Content-Type", "application/xml");
          console.log(data);
          res.status(200).send(data);
        });
    });
});

app.listen(process.env.PORT || 5000);
