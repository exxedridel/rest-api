const { Router } = require("express");
const router = Router();

// const fetch = require("node-fetch"); unnecessary in this node version

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // shows data in console
  // console.log(users);
  // displays the word users in app
  // res.send("users"); 
  // displays data in app
  res.json(users);
});

module.exports = router;
