const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use('/static', express.static(__dirname + '/static'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({
  extended: true
}))

nunjucks.configure("templates", {
  autoescape: true,
  express: app
});


app.use(routes)



app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.send({ err });
});

module.exports = app;
