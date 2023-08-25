const express = require('express');
//const app = express();

const router = express.Router();

router.get("/getinthecomments", (req, res) => {
	res.json("this is comments test");
});

module.exports = router