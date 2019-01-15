const main = require("../controllers/main.js");

module.exports = function(app) {
  app.get("/", function(req, res, next) {
    main.index(req, res);
  });

  app.get("/cakes", function(req, res, next)  {
    main.getAll(req, res);
  });

  app.get("/cakes/:id", function(req, res, next) {
    main.getOne(req, res);
  });

  app.post("/cakes", function(req, res, next) {
    main.new(req, res);
  });

  app.post("/cakes/rating/:id", function(req, res, next) {
    main.addRating(req, res);
  });

  app.delete("/cakes/:id", function(req, res, next) {
    main.delete(req, res);
  });
}
