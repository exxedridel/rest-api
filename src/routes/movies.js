const { Router } = require("express");
const router = Router();

const movies = require('../example.json')
console.log(movies);

router.get('/', (req, res) => {
   res.json(movies);
});

module.exports = router;
