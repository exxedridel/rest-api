const { Router } = require("express");
const router = Router();

const movies = require("../example.json");
console.log(movies);

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

module.exports = router;
