var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", (req, res) => {
  console.log(req.params, req.query);
  res.send(`id = ${req.params}`);
});

module.exports = router;
