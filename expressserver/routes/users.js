const express = require('express');
const db = require("../db/index.js");
const app = express();

app.use(express.json());
//app.use(cookieParser())

const router = express.Router();

router.get("/:username", async (req, res) => {

	const post = await db.manyOrNone("SELECT * FROM blog_posts WHERE username = $1 ORDER BY post_date DESC;", [req.params.username]);
	console.log(post);
	res.json(post);
});

module.exports = router