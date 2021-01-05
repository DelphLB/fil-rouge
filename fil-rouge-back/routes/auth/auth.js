const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.post("/signup", (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
    [email, password, name, lastname],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error post");
      } else {
        res.status(200).send("Post ok");
      }
    }
  );
});

module.exports = router;
