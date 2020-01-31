const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.get("/check", (req, res) => {
  let id = req.query.id;
  let pw = req.query.pw;
  console.log(`id:${id}, pw:${pw}`);
  res.send("success");
});
router.post("/check", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;
  console.log(`id:${id}, pw:${pw}`);
  res.send("success");
});

module.exports = router;
