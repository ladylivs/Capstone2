const express = require('express');
//const app = express();

const router = express.Router();

router.get("/tagtest", (req, res) => {
	res.json("this is tags test");
});

module.exports = router