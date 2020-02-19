const axios = require("axios");
const router = require("express").Router();

router.get("/api/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?key=AIzaSyD1vAB6ebgaBoaJKNAgmnFeVICug9Ls8fo", { params: req.query })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
